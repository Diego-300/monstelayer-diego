new Vue({
    el:'#app',
    data: {
        jugador: 100,
        monstruo: 100,
        enJuego: false
    },
    methods: {
        atacar: function() {
            this.jugador = this.jugador -10
            this.monstruo = this.monstruo -10

            if(this.jugador==0){
                alert("Perdiste")
                this.enJuego = false
                this.monstruo = 100
                this.jugador = 100
            }

            if(this.monstruo == 0) {
                alert('Ganaste')
                this.enJuego = false
                this.monstruo = 100
                this.jugador = 100
            }
        },
        curar: function() {
            this.jugador = this.jugador + 10
            this.monstruo = this.monstruo + 10
            if(this.jugador>100){
                this.jugador=100
            }

            if(this.monstruo>100){
                this.monstruo=100
            }
        },
        rendirse: function() {
            this.jugador = 0
            alert('Te rendiste')
            this.enJuego = false
            this.jugador = 100
                        
        },
        ataqueEspecial: function(){
            this.jugador= this.jugador-20
            this.monstruo= this.monstruo-20
            
            if(this.jugador==0){
                alert("Perdiste")
                this.enJuego = false
                this.monstruo = 100
                this.jugador = 100
            }

            if(this.monstruo == 0) {
                alert('Ganaste')
                this.enJuego = false
                this.monstruo = 100
                this.jugador = 100
            } 
        },
        iniciarJuego : function(){
        this.enJuego = true
    }
    }
}
)