const app = Vue.createApp({
    data(){
        return{
            counter:0,
            counter2:0,
        };
    },
    methods: {
        
    },
    computed:{ //reaktif olarak değişken gibi davranan yapılar
        getCounterResult(){
            console.log('log1');
            if(this.counter == 5){
                return 'eşittir';
            }else if(this.counter > 5){
                return 'büyüktür';
            }else{
                return 'küçüktür';
            }
        },
        getCounter2Result(){
            console.log('log2');
            if(this.counter2 == 5){
                return 'eşittir';
            }else if(this.counter2 > 5){
                return 'büyüktür';
            }else{
                return 'küçüktür';
            }
        }
    },
    watch : {
        counter(newValue, oldValue){
            console.log(oldValue,'=>',newValue);
        },
        getCounterResult(oldValue,newValue){
            console.log(oldValue,'=>',newValue);
        }
    }
}).mount('#app');