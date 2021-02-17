const app = Vue.createApp({
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
