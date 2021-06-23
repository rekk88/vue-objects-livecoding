const app = new Vue({
    el : "#app",

    data :{
        bici : [
            {
                nome :"graziella",
                peso : 10,
                colore :"verde",
            },
            {
                nome :"bmx",
                peso : 5,
                colore :"bianco",
            }
        ],
        // counter : 0
    },
    methods :{
        visualizzaBici(){
            // alert(this.bici);
            for(let i=0 ; i < this.bici.length;i++){
                alert(this.bici[i].nome);
            }
        }
    }
});