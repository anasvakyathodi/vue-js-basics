Vue.createApp({
    data() {
      return {
        tasks: [],
        enteredValue: ''
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredValue);
        this.enteredValue = '';
      },
      removeTask(index){
        this.tasks.splice(index,1)
      }
    }
  }).mount('#app');
  