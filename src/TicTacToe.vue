<template>
  <div>
    <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#" @click="homeClicked">IdeApps</b-navbar-brand>
            <b-navbar-nav>
              <!-- Profile picture -->
              <b-navbar-brand href="#">
                <img src="./assets/profile.jpg" @click="profileClicked" alt="Profile Picture" height="32" width="32">
              </b-navbar-brand>
              <!-- Search bar -->
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2 searchbar" placeholder="Search for a project..."></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
              <!-- Left aligned nav items -->
              <b-navbar-nav class="nav-right-items">
                <b-navbar-brand href="#" style="font-size: 18px;">Projects</b-navbar-brand>
                <b-navbar-brand href="#" style="font-size: 18px;">Bookmarks</b-navbar-brand>
                <b-navbar-brand href="#" style="font-size: 18px;">Likes</b-navbar-brand>
              </b-navbar-nav>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#"><i class="fas fa-comment-alt" style="padding-top: 5px; font-size:20px"></i></b-nav-item>
              <b-nav-item href="#"><i class="fas fa-users" style="padding-top: 5px; font-size:20px"></i></b-nav-item>
              <b-nav-item href="#" style="padding-top: 3px;">Sign out</b-nav-item>
            </b-navbar-nav>      
        </b-navbar>
      </div>
      <!-- Top Title Nav -->
      <div class="title-nav">
        <button class="button" style="position:relative; top: 28px; left: 30px;" @click="backClicked">
          <i class="fas fa-arrow-left" style="font-size: 45px; color:#1db4cc;"></i>
        </button>
        <h2 style="padding-left: 150px; top: 20px;"><b>Tic-Tac-Toe</b></h2>
        <p style="position:absolute; top:72.5px; left:400px; padding-right: 15px;">A modern implementation of the iconic game Tic-Tac-Toe.</p>
      </div>
      <div class="top-options">
        <b-container class="options">
          <b-row>
            <b-col><button class="button"><b>Join</b></button></b-col>
            <b-col><button class="button"><b>Ask Questions</b></button></b-col>
            <b-col><button class="button"><b>Docs</b></button></b-col>
            <b-col><button class="button"><b>Share</b></button></b-col>
          </b-row>
        </b-container>
      </div>
      <div class="main-body">
        <div class="left-main">
          <div class="top">
            <h2 style="padding-left:20px; padding-top:15px;">iOS development environment</h2>
            <p style="padding-left:20px; padding-right: 20px;">Since I want to make this app both iOS and Android compatible, I have chosen ReactNative. I was recommended to use AndroidStudio for the Android part and am considering using Xcode as an iOS development environment. For anyone with experience with Xcode, I would like your opinions and if anyone else has other iOS development environment recommendations!</p>
              <i class="far fa-thumbs-up" style="font-size:25px; padding-left:60px; cursor:pointer"><span style="padding-left:8px; font-size:22px;">Like</span></i>
              <i class="far fa-comment" style="font-size:25px; padding-left:100px; cursor:pointer"><span style="padding-left:8px; font-size:22px;">Comment</span></i>
          </div>
          <div class="bottom">
            <p style="padding: 20px 20px 20px 20px;">An iOS and Android application of Tic-Tac-Toe using AndroidStudio to develop in ReactNative. The implementation will have a trained non-player characters (NPCs). This will be developed with TensorFlow.</p>
          </div>
        </div>
        <div class="right-main">
          <!-- <img src="./assets/description-img.jpg" alt="TimePlan" height="740" width="348"> -->
          <a href="./assets/ticTacToeapp.jpg" title="click here to see the full sized image"><img src="./assets/ticTacToeapp.jpg" alt="TimePlan" height="740" width="348"></a>
        </div>
      </div>
      <br>
    </div>
</template>


<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    editClicked: () => {
      console.log("Edit button clicked!")
    },

    profileClicked: function() {
      this.$router.push("profile")
    },

    homeClicked: function() {
      this.$router.push("/")
    },

    backClicked: function() {
      this.$router.push("/")
    },
  }
}
</script>

<style>
.bg-info {
  background-color: #1db4cc !important;
}

.searchbar {
  width: 350px !important;
}

.nav-right-items {
  margin-left: 1vw;
  padding-top: 0.3vw;
}

.fonts-awesome {
  font-size: 22.5px;
}

.fas {
  padding-right: 10px;
}

.contents-wrapper {
  height: 100%; /* tmp */
  width: 1100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  /* box-shadow: 0px 0px 5px; */
  border: 1px solid #F6F8FA;
}

.project-info, .page-options {
  padding-left: 55px;
  padding-right: 55px;
  height: 100%; /* tmp */
  width: 100%;
  background-color: #F6F8FA;
  /* box-shadow: 0px 0px 5px; */
  border: 1px solid #F6F8FA;;
}

.section1 {
  margin-left: 40px;
  margin-top: 25px;
  height: 350px;
  width: 680px;
  background-color: white;
  border: 1px solid #000000;
  /* box-shadow: 0px 0px 3px; */
}

.section2 {
  float: right;
  margin-right: 47.5px;
  margin-top: -350px;
  height: 350px;
  width: 300px;
  background-color: white;
  border: 1px solid #000000;
  /* box-shadow: 0px 0px 3px; */
  position: relative;
}

.title-nav {
  height: 100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;
}

.title-nav h2 {
  line-height: 0.2;
}

.top-options {
  height: 50px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;
  margin-bottom: 2px;
}

.options{
  font-size: 22px;
  padding-top: 8px;
  text-align: center;
}

.main-body {
  height: 800px;
  width: 1100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;
}

.left-main {
  margin-left: 40px;
  margin-top: 25px;
  height: 740px;
  width: 600px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.left-main .top{
  margin-left: 40px;
  margin-top: 40px;
  height: 300px;
  width: 518px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.left-main .bottom{
  margin-left: 40px;
  margin-top: 50px;
  height: 300px;
  width: 518px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}


.right-main {
  margin-top: -740px;
  margin-right: 40px;
  float: right;
  height: 740px;
  width: 350px;
  background-color: white;
  border: 1px solid #000000;
  box-shadow: 0px 0px 3px;
}

.button {
  border-radius: 50%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none !important;
}
</style>