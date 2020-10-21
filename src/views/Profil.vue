<template>
  <div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="message py-3"
            >
              <div class="card">
                <div class="card-body bg-dark">
                  <h5 class="card-title">
                    <b>{{ message.title }}</b>
                  </h5>
                  <h6 class="card-subtitle my-2 text-muted">
                    {{ message.author }}
                  </h6>
                  <p class="card-text">
                    {{ message.message }}
                  </p>
                  <a href="#" class="card-link h2 mb-0">
                    <b-icon icon="hand-thumbs-up" class="text-success"></b-icon>
                    <span class="text-success">{{ message.likes }}</span>
                  </a>
                  <a href="#" class="card-link h2 mb-0">
                    <b-icon
                      class="text-danger"
                      icon="hand-thumbs-down"
                    ></b-icon>
                    <span class="text-danger">{{ message.dislikes }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3 ">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="mb-0">© 2020-2021 Groupomania. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          title: "Premier message",
          author: "Admin",
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt, accusamus officia recusandae autem laudantium repellendus velit optio! Natus, voluptas.",
          likes: 1,
          dislikes: 1
        },
        {
          title: "Deuxième message",
          author: "Moderateur",
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt, accusamus officia recusandae autem laudantium repellendus velit optio! Natus, voluptas.",
          likes: 1,
          dislikes: 1
        },
        {
          title: "Troisième message",
          author: "Admin",
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt, accusamus officia recusandae autem laudantium repellendus velit optio! Natus, voluptas.",
          likes: 1,
          dislikes: 1
        },
        {
          title: "Troisième message",
          author: "Admin",
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt, accusamus officia recusandae autem laudantium repellendus velit optio! Natus, voluptas.",
          likes: 1,
          dislikes: 1
        },
        {
          title: "Troisième message",
          author: "Admin",
          message:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sunt, accusamus officia recusandae autem laudantium repellendus velit optio! Natus, voluptas.",
          likes: 1,
          dislikes: 1
        }
      ]
    };
  }
};
</script>

<style>
</style>