// Métodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo la canción de ${id}`);
    },
    pausar : function() {
        console.log('pausando....')
    },
    crearPlayList : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlayList : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.eliminar = function(id) {
    console.log(`Eliminar la canción con el id: ${id}`);
}

reproductor.reproducir(345);
reproductor.pausar();
reproductor.eliminar(35);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList('Heavy Metal');
