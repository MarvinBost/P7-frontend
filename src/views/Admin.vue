<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-3">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            href="#dash"
            role="tab"
            data-toggle="tab"
            class="list-group-item active main-color-bg text-dark"
          >
            Dashboard
          </a>
          <a
            href="#posts"
            class="list-group-item text-dark"
            role="tab"
            data-toggle="tab"
          >
            Posts <span class="badge">{{ messages.length }}</span></a
          >
          <a
            href="#users"
            role="tab"
            data-toggle="tab"
            class="list-group-item text-dark"
          >
            Users <span class="badge">{{ users.length }}</span></a
          >
        </div>
      </div>
      <div class="col-md-9">
        <div class="tab-content panel panel-default py-3">
          <div class="tab-pane fade show active" id="dash" role="tabpanel">
            <h3 class="panel-title">Statistiques</h3>
            <div class="row">
              <div class="col-md-3">
                <div class="well">
                  <h2>
                    <b-icon icon="person"></b-icon>
                    {{ users.length }}
                  </h2>
                  <h4>Users</h4>
                </div>
              </div>
              <div class="col-md-3">
                <div class="well">
                  <h2>
                    <b-icon icon="card-text"></b-icon>
                    {{ messages.length }}
                  </h2>
                  <h4>Posts</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="users" role="tabpanel">
            <h3 class="panel-title">Utilisateurs</h3>
            <table class="table table-striped table-hover table-responsive">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>isAdmin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tr v-for="(user, id) in users" :key="id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.isAdmin }}</td>
                <td>
                  <button @click="userDelete(user)" class="btn btn-danger mr-1">
                    <b-icon icon="trash"></b-icon>
                  </button>
                  <button
                    @click="upUser(user)"
                    v-if="!user.isAdmin"
                    class="btn btn-success mr-1"
                  >
                    <b-icon icon="arrow-bar-up"></b-icon>
                  </button>
                  <button
                    @click="downUser(user)"
                    v-if="user.isAdmin"
                    class="btn btn-danger mr-1"
                  >
                    <b-icon icon="arrow-bar-down"></b-icon>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div class="tab-pane fade" id="posts" role="tabpanel">
            <h3 class="panel-title">Posts</h3>
            <table class="table table-striped table-hover table-responsive">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Likes</th>
                  <th>Dislikes</th>
                  <th>Auteur</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tr v-for="(message, id) in messages" :key="id">
                <td>{{ message.id }}</td>
                <td>{{ message.title }}</td>
                <td>{{ message.likes }}</td>
                <td>{{ message.dislikes }}</td>
                <td>{{ message.UserId }}</td>
                <td>
                  <button
                    @click="messageDelete(message)"
                    class="btn btn-danger mr-1"
                  >
                    <b-icon icon="trash"></b-icon>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "@/services/Data.js";
export default {
  data() {
    return {
      users: [],
      messages: []
    };
  },
  async beforeCreate() {
    this.messages = await Data.getMessages();
    this.users = await Data.getUsers();
  },
  methods: {
    userDelete(target) {
      Data.deleteUser(target.id).then(user => {
        console.log(user.message);
        this.users = this.users.filter(user => user.id !== target.id);
      });
    },
    messageDelete(target) {
      Data.deleteMessage(target.id).then(message => {
        console.log(message.response);
        this.messages = this.messages.filter(
          message => message.id !== target.id
        );
      });
    },
    upUser(target) {
      let payload = { isAdmin: true };
      Data.upUser(target.id, payload).then(user => {
        if (user == 1) {
          target.isAdmin = true;
        }
      });
    },
    downUser(target) {
      let payload = { isAdmin: false };
      Data.upUser(target.id, payload).then(user => {
        if (user == 1) {
          target.isAdmin = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.col-md-9 {
  background-color: #103847;
}
</style>