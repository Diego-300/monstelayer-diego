new Vue({
    el:'#app',
    data: {
        jugador: 100,
        monstruo: 100
    },
    methods: {
        atacar: function() {
            this.jugador = this.jugador -10
            this.monstruo = this.monstruo -10
        },
        curar: function() {
            this.jugador = this.jugador + 10
            this.monstruo = this.monstruo + 10
        }
    }
}
)