<template>
  <div class="header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" @click="homeClicked">IdeApps</b-navbar-brand>
          <b-navbar-nav>
            <!-- Profile picture -->
            <b-navbar-brand href="#">
              <img src="./assets/profile.jpg" @click="profileClicked" alt="Profile" height="32" width="32">
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
      <br><br>

      <!-- Outer wrapper -->
      <div class="profile-wrapper">

        <div class="box1">
          <button class="button" type="button" @click="editClicked"><i class="fa fa-pencil" style="font-size:15px; margin-top:55px;"></i></button>
          <img src="./assets/profile.jpg" alt="Profile Picture" height="220" width="220" style="margin-top:-23px;">
          <h4 style="margin: 0;">Oakley Pabualan</h4>
          <b-container style="padding-top:5px;">
            <b-row align-h="between">
              <b-col>
                <p style="margin: 0; padding:0;">Online <i class="fas fa-circle" style="color: green; font-size: 10px;"></i></p>
              </b-col>
              <b-col style="padding-right:0px; padding-left:55px;">
                <a href="https://github.com/" target="_blank"><i class="fab fa-github" style="font-size: 25px;"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin" style="font-size: 25px;"></i></a>
                <a href="https://www.google.com/intl/en-GB/gmail/about/" target="_blank"><i class="fas fa-envelope-square" style="font-size: 25px;"></i></a>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <div class="box2">
          <button class="button" type="button" @click="editClicked"><i class="fa fa-pencil" style="margin-top:35px; margin-right:3px; font-size: 15px;"></i></button>

          <b-container class="personal-details">
            <b-row align-h="around">
              <b-col cols="6" style="height:300px;">
                <h4>Experience</h4>
                <p><b>OMKO — Senior Software Engineer</b><br>
                OCTOBER 2019 - PRESENT<br>
                Retrieved data, and using sentiment analysis identified and classified text from different platforms.</p>
                <p><b>Fidelity Insurance — Software Engineer</b><break></break><br>
                OCTOBER 2019 - OCTOBER 2019<br>
                Assisted in developing a chat bot that helped customer queries online.</p>
              </b-col>
              <b-col cols="6" style="height:285px; border-left: solid 2px #cccccc;">
                <h4>Languages</h4>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>Scala</li>
                  <li>R</li>
                  <li>Haskell</li>
                  <li>Prolog</li>
                </ul>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="box3">
          <button class="button" type="button" @click="editClicked"><i class="fa fa-pencil" style="margin-top:60px; margin-right:3px; font-size:15px;"></i></button>
          <h2>Projects</h2>

          <b-container class="bv-example-row">
            <b-row align-h="around">
              <b-col cols="4">
                <h4>AppDeas</h4>
                <p>A responsive web application that allows users to post and select project ideas.</p>  
                <ul id="horizontalList">
                  <li id="frameworkCard">ReactNative</li>
                  <li id="languageCard">TensorFlow</li>
                </ul>
              </b-col>
              <b-col cols="4" style="border-left: solid 2px #cccccc;">
                <h4>Clothesette</h4>
                <p>An Android and iOS mobile application for a clothes manager to aid the user in choosing outfit.</p>
                <ul id="horizontalList">
                  <li id="languageCard">JavaScript</li>
                  <li id="languageCard">Java</li>
                  <li id="frameworkCard">React</li>
                </ul>
              </b-col>
              <b-col cols="4" style="border-left: solid 2px #cccccc;">
                <h4>Day Planner</h4>
                <p>A mobile application that will plan out a day for the user with just the click of a button.</p>
                <ul id="horizontalList">
                  <li id="languageCard">JavaScript</li>
                  <li id="languageCard">Python</li>
                  <li id="frameworkCard">Vue.js</li>
                </ul>
              </b-col>
            </b-row>
          </b-container>
        
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
    }
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

.profile-wrapper {
  height: 715px;
  width: 1100px;
  background-color: #F6F8FA;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
  border: 1px solid #F6F8FA;
}

h4 {
  margin-bottom: 7px;
  padding-top: 5px;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
}

h2 {
  padding-bottom: 10px;
  color: #1db4cc;
  margin-bottom: 0;
  margin-left: 15px;
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 15px;
  font-family: 'Roboto', sans-serif;
}

p {
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'PT Serif', serif;
}

.profile-wrapper button {
  float: right;
  margin-top: -35px;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: 	#8c8c8c;
  cursor: pointer;
  overflow: hidden;
  outline: none !important;
}

.box1 {
  margin-left: 40px;
  margin-top: 25px;
  height: 325px;
  width: 270px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.box1 img {
  margin-left: 23px;
  margin-top: 15px;
  margin-bottom: 7px;
}

.profile-wrapper h2 {
  margin-bottom: 0;
}

.box2 {
  float: right;
  margin-right: 47.5px;
  margin-top: -325px;
  padding-top: 20px;
  height: 325px;
  width: 710px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
  position: relative;
}

.box2-1 {
  margin-left: 35px;
  margin-top: 25px;
  height: 295px;
  width: 285px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.box2-2 {
  float: right;
  margin-right: 35px;
  margin-top: -295px;
  height: 295px;
  width: 285px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

.box3 {
  margin-left: 40px;
  margin-top: 30px;
  height: 300px;
  width: 1010px;
  background-color: white;
  border: 1px solid #F6F8FA;
  box-shadow: 0px 0px 3px;
}

#languageCard {
  border-radius: 15px 50px 30px;
  background: #B4E89B;
  padding: 8px;
  width: 200px;
  height: 150px;
}
#frameworkCard {
  border-radius: 15px 50px 30px;
  background: #7DD8C0;
  padding: 8px;
  width: 200px;
  height: 150px;
}

ul#horizontalList li {
  display:inline;
}
</style>