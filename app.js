new Vue({
    el:'#app',
    data: {
        logs:[], 
        jugador: 100,
        monstruo: 100,
        enJuego: false
    },
    methods: {
        atacar: function() {
            var danioJugador=this.randomInt(1,10);
            var danioMonstruo=this.randomInt(1,10);

            this.jugador -= danioJugador;
            this.monstruo -= danioMonstruo;
            this.logs.unshift({
                esJugador:false,
                descripcion: "Monstruo ataca a Jugador con:"+danioJugador
            });
            this.logs.unshift({
                esJugador:true,
                descripcion:"Jugador ataca a Monstruo con:"+danioMonstruo
            });
            

            if(this.jugador <= 0){
                alert("Perdiste")
                this.finalizarJuego();
            }

            if(this.monstruo <= 0) {
                alert('Ganaste')
                this.finalizarJuego();
            }
        },
        curar: function() {
            var danioJugador=this.randomInt(1,10);
            var curarJugador=this.randomInt(1,10)

            this.jugador += curarJugador;
    
            if(this.jugador>100){
                this.jugador=100
            }
            this.jugador -= danioJugador

            this.logs.unshift({
                esJugador:false,
                descripcion: "Monstruo ataca a Jugador con:"+danioJugador
            });    
            this.logs.unshift({
                esJugador:true,
                descripcion:"Jugador se cura con:"+curarJugador
            });
            

        },
        ataqueEspecial : function(){
            var especialJugador=this.randomInt(10,20);
            var especialMonstruo=this.randomInt(10,20);

            this.jugador -=especialJugador;
            this.monstruo -=especialMonstruo; 

            this.logs.unshift({
                esJugador:false,
                descripcion: "Monstruo usa ataque especial a Jugador con:"+especialJugador
            });
            this.logs.unshift({
                esJugador:true,
                descripcion:"Jugador usa ataque especial a Monstruo con:"+especialMonstruo
            });

            if(this.jugador <= 0){
                alert("Perdiste")
                this.finalizarJuego();
            }

            if(this.monstruo <= 0) {
                alert('Ganaste')
                this.finalizarJuego();
            }     

        },
        rendirse : function() {
            alert('Te rendiste')
            this.finalizarJuego();
                        
        },
        iniciarJuego : function(){
            this.enJuego = true
            this.logs=[]
        },
        finalizarJuego: function() {
            this.monstruo = 100
            this.jugador = 100

            let volverAJugar = confirm("Vas a volver a jugar?");

            if(volverAJugar) {
                this.iniciarJuego();
            } else {
                this.enJuego = false
            }


        },
        randomInt: function(min, max) {
            return min + Math.floor((max - min) * Math.random());
        }
    }
}
)