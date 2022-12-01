const app = Vue.createApp({
    data(){
        return{
            fullName :"asdasd",

        }
    },
    methods : {
        updateValue(event){
            console.log(event.target.value);
            this.fullName = event.target.value;
        },
    },
}).mount('#app');