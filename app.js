// this is declarative approach we just have to declare what to do
// where we declare results
// instead of steps of getting there
Vue.createApp({
  data: () => {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

//
/* const input = document.getElementById("input");
const btn = document.getElementById("addGoalBtn");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
  const value = input.value;
  const listItem = document.createElement("LI");
  listItem.textContent = value;
  list.append(listItem);
  input.value = "";
});
 */
