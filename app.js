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
      switch (boxId) {
        case "A":
          this.boxASelected = !this.boxASelected;
          break;
        case "B":
          this.boxBSelected = !this.boxBSelected;
          break;
        case "C":
          this.boxCSelected = !this.boxCSelected;
          break;
        default:
          break;
      }
    },
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
});

app.mount("#styling");
