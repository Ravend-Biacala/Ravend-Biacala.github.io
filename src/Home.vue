<template>
  <div id="app">
    <div class="header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" @click="homeClicked" alt="Home">IdeApps</b-navbar-brand>
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
              <b-navbar-brand href="#" @click="projectClicked" alt="Projects" style="font-size: 18px;">Projects</b-navbar-brand>
              <b-navbar-brand href="#" style="font-size: 18px;" alt="Bookmarks">Bookmarks</b-navbar-brand>
              <b-navbar-brand href="#" style="font-size: 18px;" alt="Likes">Likes</b-navbar-brand>
            </b-navbar-nav>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><i class="fas fa-comment-alt" style="padding-top: 5px; font-size:20px" alt="Comments"></i></b-nav-item>
            <b-nav-item href="#"><i class="fas fa-users" style="padding-top: 5px; font-size:20px" alt="Connections"></i></b-nav-item>
            <b-nav-item href="#" style="padding-top: 3px;" alt="sign-out">Sign out</b-nav-item>
          </b-navbar-nav>      
      </b-navbar>
    </div>
    <br><br>
    <!-- Boxes -->
    
    <transition name="slide-fade">
    <div v-if="show" class="rectangle-background">
      <div class="rectangle-1">
        <h1>AI-Open Mind</h1>
        <p>Training an Artificial Intelligence.</p>
      </div>
      <div class="rectangle-4">
        <h1>Languages</h1>
        <ul>
          <li id="languageCard">Python</li>
        </ul>
        <h1>Frameworks</h1>
        <ul>
          <li id="frameworkCard">TensorFlow</li>
        </ul>
      </div>
      <div class="rectangle-3">
        <h1>Tools</h1>
        <ul>
          <li>GitHub</li>
        </ul>
      </div>
      <div class="rectangle-2">
        <h1>Description</h1>
        <img src="./assets/project.png" alt="Profile" height="175" width="175" style="float: right; padding-right: 10px;">
        <p>Training an Artificial Intelligence to have analyse a given topic and be able to produce its own formulated opinions..</p>
        <p>Suggestions and opinions would be greatly appreciated.</p>
      </div>
      <a href="https://github.com/"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="https://ie.linkedin.com/"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="https://mail.google.com/"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
    </div>
    </transition>

    <transition name=slide-fade>
    <div v-if="show1" class="rectangle-background">
      <div class="rectangle-1">
        <h1>Tic-Tac-Toe</h1>
        <p>A modern implementation of the iconic game Tic-Tac-Toe.</p>
      </div>
      <div class="rectangle-4">
        <h1>Languages</h1>
        <ul>
          <li id="languageCard">Python</li>
          <li id="languageCard">JavaScript</li>
        </ul>
        <h1>Frameworks</h1>
        <ul>
          <li id="frameworkCard">TensorFlow</li>
          <li id="frameworkCard">ReactNative</li>
        </ul>
      </div>
      <div class="rectangle-3">
        <h1>Tools</h1>
        <ul>
          <li>GoogleCloud Platform</li>
          <li>Android Studio</li>
          <li>Xcode</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div class="rectangle-2">
        <h1>Description</h1>
        <img src="./assets/project1.gif" alt="Tic-Tac-Toe board" height="175" width="175" style="float: right; padding-right: 10px;">
        <p>An iOS and Android application of Tic-Tac-Toe using Xcode and AndroidStudio to develop in ReactNative. The implementation will have a trained non-player characters (NPCs). This will be developed with TensorFlow.</p>
      </div>
      <a href="https://github.com/"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="https://ie.linkedin.com/"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
      <a href="https://mail.google.com/"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
    </div>
    </transition>

    <transition name="slide-fade">
      <div v-if="show2" class="rectangle-background">
        <div class="rectangle-1">
          <h1>Ludo</h1>
          <p>A remake of the classic Ludo board game.</p>
        </div>
        <div class="rectangle-4">
          <h1>Languages</h1>
          <ul>
            <li id="languageCard">Python</li>
          </ul>
          <h1>Frameworks</h1>
          <ul>
            <li id="frameworkCard">PyGame</li>
          </ul>
        </div>
        <div class="rectangle-3">
          <h1>Tools</h1>
          <ul>
            <li>GitHub</li>
          </ul>
        </div>
        <div class="rectangle-2">
          <h1>Description</h1>
          <img src="./assets/ludo.png" alt="Ludo" height="175" width="175" style="float: right; padding-right: 10px;">
          <p>Creating a multiplayer Ludo game that can be played with other people with different machines. Implementing our own server using Python and the UI of the game using PyGame.</p>
        </div>
        <a href="https://github.com/"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
        <a href="https://ie.linkedin.com/"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
        <a href="https://mail.google.com/"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
      </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="show3" class="rectangle-background">
          <div class="rectangle-1">
            <h1>Karaoke</h1>
            <p>An Android and iOS Karaoke mobile application with pitch analysis.</p>
          </div>
          <div class="rectangle-4">
            <h1>Languages</h1>
            <ul>
              <li id="languageCard">Java</li>
              <li id="languageCard">JavaScript</li>
            </ul>
            <h1>Frameworks</h1>
            <ul>
              <li id="frameworkCard">ReactNative</li>
              <li id="frameworkCard">JSyn</li>
            </ul>
          </div>
          <div class="rectangle-3">
            <h1>Tools</h1>
            <ul>
              <li>Android Studio</li>
              <li>Xcode</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div class="rectangle-2">
            <h1>Description</h1>
            <img src="./assets/karaoke.jpg" alt="Karaoke with mic" height="175" width="175" style="float: right; padding-right: 10px;">
            <p>A karaoke mobile application that allows users to connect a microphone to the device. The app will be able to detect the sounds produced and analyse the pitches in correlation with the song. The app will be hosted using heroku.</p>
          </div>
          <a href="https://github.com/"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
          <a href="https://ie.linkedin.com/"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
          <a href="https://mail.google.com/"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
        </div>
      </transition>

      <transition name=slide-fade>
        <div v-if="show4" class="rectangle-background">
          <div class="rectangle-1">
            <h1>BeatsMixer</h1>
            <p>A web application that creates music.</p>
          </div>
          <div class="rectangle-4">
            <h1>Languages</h1>
            <ul>
              <li id="languageCard">JavaScript</li>
            </ul>
            <h1>Frameworks</h1>
            <ul>
              <li id="frameworkCard">ReactNative</li>
            </ul>
          </div>
          <div class="rectangle-3">
            <h1>Tools</h1>
            <ul>
              <li>GoogleCloud Platform</li>
              <li>Android Studio</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div class="rectangle-2">
            <h1>Description</h1>
            <img src="./assets/beatsmixer.png" alt="Headphones" height="175" width="175" style="float: right; padding-right: 10px;">
            <p>A sound board that will generate music. User’s will be able to collaborate with other people and compose music. This is also a social media platform where users of BeatsMixer can listen to other user’s creation to get inspiration.</p>
          </div>
          <a href="https://github.com/"><i class="fab fa-github" style="float: right; margin-right: 445px; margin-top: -65px; font-size: 80px;"></i></a>
          <a href="https://ie.linkedin.com/"><i class="fab fa-linkedin" style="float: right; margin-right: -235px; margin-top: -65px; font-size: 80px;"></i></a>
          <a href="https://mail.google.com/"><i class="fas fa-envelope-square" style="float: right; margin-right: -400px; margin-top: -65px; font-size: 80px;"></i></a>
        </div>
        </transition>

    <div class="actions">
      <button class="button" type="button" aria-label="Refresh for new results" @click="actionClicked"><i class="fas fa-sync-alt" style="color: #02d2f2;"></i></button>
      <button class="button" type="button" aria-label="Like the project" @click="actionClicked"><i class="fas fa-times-circle" style="color: red; padding-left: 5px;"></i></button>
      <button class="button" type="button" aria-label="Dislike the project" @click="actionClicked"><i class="fas fa-heart" style="color: #00eab5; padding-left: 5px;"></i></button>
      <button id="tooltip-button-1" class="button" type="button" aria-label="More in-depth view" @click="expandClicked"><i class="fas fa-search-plus" style="color: #f5f507; padding-left: 5px;"></i></button>
    </div>
    <b-tooltip target="tooltip-button-1" placement="right">
      Click me for a more <b>in-depth</b> view!
    </b-tooltip>
  </div>
</template>



<script>
export default {
  data () {
    this.currentProject = "aiopenmind";
    return {
      show: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }
  },
  methods: {
    expandClicked: function() {
      console.log(this.currentProject);
      this.$router.push("/" + this.currentProject)
    },

    actionClicked: function() {
      if (this.show == true) {
        this.show = !this.show
        var that = this // store the reference to a `this` in `that` variable
        this.currentProject = "tictactoe";
        setTimeout(function() {
          that.show1 = !that.show1;
        },800)
      } else if (this.show1 == true){
        this.show1 = !this.show1
        var that = this // store the reference to a `this` in `that` variable
        this.currentProject = "ludo";
        setTimeout(function() {
          that.show2 = !that.show2;
        },800)
      } else if (this.show2 == true){
        this.show2 = !this.show2
        var that = this // store the reference to a `this` in `that` variable
        this.currentProject = "karaoke";
        setTimeout(function() {
          that.show3 = !that.show3;
        },800);
      } else if (this.show3 == true){
        this.show3 = !this.show3
        var that = this // store the reference to a `this` in `that` variable
        this.currentProject = "beatsmixer";
        setTimeout(function() {
          that.show4 = !that.show4;
        },800);
      } else if (this.show4 == true){
        this.show4 = !this.show4
        var that = this // store the reference to a `this` in `that` variable
        this.currentProject = "aiopenmind";
        setTimeout(function() {
          that.show = !that.show;
        },800);
      }
    },

    homeClicked: function() {
      this.$router.push("/")
    },

    profileClicked: function() {
      this.$router.push("profile")
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

.rectangle-background {
  height: 550px;
  width: 1100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;;
}

.rectangle-1 {
  margin-left: 40px;
  margin-top: 25px;
  height: 175px;
  width: 425px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.rectangle-2 {
  margin-left: 40px;
  margin-top: 50px;
  height: 265px;
  width: 425px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.rectangle-3 {
  float: right;
  margin-right: 47.5px;
  margin-top: -175px;
  height: 400px;
  width: 200px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
  position: relative;
}

.rectangle-4 {
  float: right;
  margin-right: 40px;
  margin-top: -175px;
  height: 400px;
  width: 300px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.actions {
  font-size: 60px;
  text-align: center;
  padding-top: 20px;
  cursor: default;
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

h1 {
  padding-top: 10px;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
}

p {
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'PT Serif', serif;
}

.rectangle-background li {
  font-family: 'PT Serif', serif;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(200px);
  opacity: 0;
}

#languageCard {
  border-radius: 15px 50px 30px;
  background: #B4E89B;
  margin-bottom: 5px;
  padding: 8px;
  width: 200px;
  height: 40px;
}
#frameworkCard {
  border-radius: 15px 50px 30px;
  background: #7DD8C0;
  margin-bottom: 5px;
  padding: 8px;
  width: 200px;
  height: 40px;
}
</style>