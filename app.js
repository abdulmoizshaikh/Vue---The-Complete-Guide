const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(boxId) {
      console.log("boxId", boxId);
      switch (boxId) {
        case "A":
          this.boxASelected = true;
          break;
        case "B":
          this.boxBSelected = true;
          break;
        case "C":
          this.boxCSelected = true;
          break;
        default:
          break;
      }
    },
  },
});

app.mount("#styling");
