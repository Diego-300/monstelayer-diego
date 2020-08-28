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
            this.logs.push("Monstruo ataca a Jugador con:"+danioJugador);
            this.logs.push("Jugador ataca a Monstruo con:"+danioMonstruo);
            

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
            this.jugador += this.randomInt(1,10);
    
            if(this.jugador>100){
                this.jugador=100
            }

            this.jugador -= this.randomInt(1,10);
        },
        rendirse: function() {
            alert('Te rendiste')
            this.finalizarJuego();
                        
        },
        ataqueEspecial: function(){
            this.jugador -= this.randomInt(10,20);
            this.monstruo -= this.randomInt(10,20);
            
            if(this.jugador <= 0){
                alert("Perdiste")
                this.finalizarJuego();
            }

            if(this.monstruo <= 0) {
                alert('Ganaste')
                this.finalizarJuego();
            } 
        },
        iniciarJuego : function(){
            this.enJuego = true
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