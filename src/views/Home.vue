<template>
  <div>
    <div class="py-5 bg-fixed bg-custom">
      <div class="container bg-dark p-3">
        <div class="row">
          <div class="col-md-12">
            <!-- <p class="lead">
              Lead paragraph. A wonderful serenity has taken possession of my
              entire soul.
            </p> -->
            <form @submit.prevent="postMessage()">
              <!-- <label for="title" aria-hidden="true">Titre du message</label> -->
              <input
                aria-label="Titre du message"
                v-model="title"
                class="form-control mb-2"
                placeholder="Titre du message"
                type="text"
              />
              <textarea
                aria-label="Texte du message"
                v-model="content"
                class="form-control mb-2"
                placeholder="Texte du message"
                rows="3"
              ></textarea>
              <input
                aria-label="Url de l'image"
                v-model="attachment"
                type="text"
                class="form-control mb-2"
                name="url"
                id="url"
                aria-describedby="url"
                placeholder="https://example.com/image.jpg"
              />
              <div class="d-flex justify-content-center my-2">
                <button class="btn btn-primary text-dark btn-lg btn-block">
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="message py-3"
            >
              <div class="card" :id="message.id">
                <div class="card-body bg-dark">
                  <h5 class="card-title">
                    {{ message.title }}
                  </h5>
                  <!-- <img
                    v-if="message.attachment"
                    :src="message.attachment"
                    class="card-img-top img-fluid my-2"
                  /> -->

                  <div class="outer">
                    <div
                      v-if="message.attachment"
                      class="card-img-top my-2 content"
                      v-bind:style="{
                        background: 'url(' + message.attachment + ')'
                      }"
                    ></div>
                  </div>
                  <p class="card-text">
                    {{ message.content }}
                  </p>
                  <div class="d-flex justify-content-left">
                    <a @click="likeMessage(message)" class="card-link h5 mb-0">
                      <div class="d-flex align-items-center">
                        <b-icon
                          icon="hand-thumbs-up"
                          class="text-success"
                        ></b-icon>
                        <span class="ml-1 text-success">{{
                          message.likes
                        }}</span>
                      </div>
                    </a>
                    <a
                      @click="dislikeMessage(message)"
                      class="card-link h5 mb-0"
                    >
                      <div class="d-flex align-items-center">
                        <b-icon
                          class="text-danger"
                          icon="hand-thumbs-down"
                        ></b-icon>
                        <span class="ml-1 text-danger">{{
                          message.dislikes
                        }}</span>
                      </div>
                    </a>
                    <button
                      v-if="my(message)"
                      @click="deleteMessage(message)"
                      class="btn btn-danger ml-auto"
                    >
                      <b-icon class="text-light" icon="trash"></b-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="mb-0">
              © 2020-2021 Groupomania. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from "@/services/Messages.js";
import Data from "@/services/Data.js";
export default {
  data() {
    return {
      messages: [],
      myid: 0,
      timer: "",
      //form data
      title: "",
      content: "",
      attachment: ""
    };
  },
  async beforeCreate() {
    this.messages = await Messages.getMessages();
    this.myid = await Data.getMe().then(res => res.id);
  },
  created() {
    this.getData();
  },
  methods: {
    my(message) {
      if (message.UserId == this.myid) {
        return true;
      }
    },
    async getData() {
      this.messages = await Messages.getMessages();
    },
    deleteMessage(msg) {
      Data.deleteMessage(msg.id).then(message => {
        console.log(message.response);
        this.messages = this.messages.filter(message => message.id !== msg.id);
      });
    },
    postMessage() {
      if (this.title && this.content) {
        let payload = {
          title: this.title,
          content: this.content,
          attachement: this.attachment
        };
        Data.postMessage(payload).then(message => {
          this.messages.unshift(message);
        });
      }
    },
    likeMessage(target) {
      Data.likeMessage(target.id)
        .then(message => {
          this.messages.filter(item => {
            if (item.id == message.id) {
              item.likes = message.likes;
              item.dislikes = message.dislikes;
            }
          });
        })
        .catch(() => {
          alert("Post déjà liké !");
        });
    },
    dislikeMessage(target) {
      Data.dislikeMessage(target.id)
        .then(message => {
          this.messages.filter(item => {
            if (item.id == message.id) {
              item.likes = message.likes;
              item.dislikes = message.dislikes;
            }
          });
        })
        .catch(() => {
          alert("Post déjà disliké !");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-img-top {
  display: block;
  width: 100vw;
  height: 56.25vw;
  max-width: 100%;
  max-height: 600px;
  background-size: cover !important;
  background-position: center center !important;
}
.custom-file-label::after {
  background-color: #009fdc;
}
</style>