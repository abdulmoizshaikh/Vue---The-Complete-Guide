// <!-- 02 understand event binding -->

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
      completeName: "",
    };
  },
  watch: {
    number(newVal, oldVal) {
      alert("number changed");
    },
  },
  computed: {
    number() {
      return this.name + " " + "lastname";
    },
  },

  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    outputFullName() {
      console.log("outputFullName");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Shah";
    },
    // setName(event, surname) {
    //   // this.name = event.target.value + surname;
    //   this.name = event.target.value;
    // },
    submitForm(event) {
      alert("submit");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

// <!-- basics-01-starting-code -->
/* const app = Vue.createApp({
  //  here data is function
  data() {
    return {
      courseGoal: "Course Goal",
      courseGoalA: "Finish the Basic course of Vue!",
      courseGoalB: "Finish the Master course of Vue!",
      courseGoalC: "<h3>Course Goal HTML interpreted</h3>",
      vueLink: "https://vuejs.org/",
    };
  },
  //methods is an object
  methods: {
    outputGoal() {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalC;
      }
    },
  },
});

app.mount("#user-goal"); //to establish connection of Vue to html page
 */
