const app = Vue.createApp({
    data(){
        return{
            //todo codes
            todoText : null,
            todoList :[],
            //title codes
            title : 'Vue.js bootcamp 1.gün',
            content : 'lorem ipsum dolor sit amet',
            google : {
                title : 'google sekmesini aç',
                url : 'https://www.google.com',
                target : '_blank',
                alt : 'burası bir google sekmesi linki'
            },
            owner : 'pogaca',
            coords : {
                x : 0,
                y : 0,
            }
            
        };
    },
    methods :{
        addTodo(){
            this.todoList.push(this.todoText);
        },
        changeTitle(pTitle){
            this.title = pTitle;
        },
        updateCoords(event){
            console.log(event.x, event.y);
            this.coords = {
                x:event.x,
                y:event.y
            }
        }
    },
}).mount("#app");