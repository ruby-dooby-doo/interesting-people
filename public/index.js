/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      newPerson: {name: "", bio: "", bioVisible: true},
      people: [],
    };
  },
  created: function() {
    console.log('in the created function');
    console.log('outside this')
    console.log(this);
    axios.get('/api/people').then(function(response) {
      console.log('inside this');
      console.log(this);
      console.log(response.data);
      // reset the people array to the info that came back
      this.people = response.data;
    }.bind(this));
  },
  methods: {
    removePerson: function(inputPerson) {
      // find the index of the inputPerson
      var index = this.people.indexOf(inputPerson);
      // remove the person from the array
      this.people.splice(index, 1);
    },
    numberOfPeople: function() {
      return this.people.length;
    },
    addPerson: function() {
      console.log('adding the person...');
      // get the info the user typed in
      // add that info to the array
      this.people.push(this.newPerson);
    },
    toggleBio: function(inputPerson) {
      console.log('toggling the bio');
      // change from true to false or false to true
      inputPerson.bioVisible = !inputPerson.bioVisible;
      // if (inputPerson.bioVisible === true) {
      //   inputPerson.bioVisible = false;
      // } else {
      //   inputPerson.bioVisible = true;
      // }
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});



// When a name is clicked, that should toggle the showing/hiding of the bio.
  // when someone clicks the name of any of the people, i have to run a function
  // that function has to change the bioVisible attribute of the person to true or false, depending on where it started
  // make vuejs either show or hide that person's bio based on the bioVisible attribute

