//1.
const Coche = {
    marca: "Ford",
    modelo: "Focus",
    matricula: "3333LLL",
}
//2.
const Casa ={
    codPostal: "45789",
    calle: "Les Barques",
    portal: "4",
    piso: "4",
}
//3.
const FullStackDeveloper ={
    lenguajes: ["JavaScript","Python"],
    proyectos: ["Bikram objetos","Bikram arrays"]
}
//4.
const Perro = {
    nombre: "Thor",
    raza: "Border Collie",
    color: "Negro",
    edad:"4",
    ladrar: function () {
        console.log("¡Guau!");
    },
    popo: function () {
        return Math.random()*3;
    }
};
//5.
const marcaPortatil = Portatil.marca;
//6.
const marcaPortatil2 = Portatil["marca"]
//7.
const grupos = Concierto ["grupos"]
//8.
const RGB = [Led.rojo, Led.verde, Led.azul]
//9.
Portatil.modelo = "P345"
//10.
Concierto.cartelera.push("Guns N` Roses");
//11.
Concierto.fecha = new Date ();
//12.
Impresora.imprimiendo = {
    nombreArchivo: "apuntes.word",
    copias: 2,
    numPaginas: 10
};
//13.
const Noticia ={
    titular: "El Tiempo",
    cuerpo: "Ceuta",
}
//14.
const Persona ={
    nombre: "Jose",
    apellidos: "Flores",
    edad:"45",
}
//15.
const Avion ={
    numPasajeros: "134",
    despegar:function () {
        console.log("despegando");
    },
volar:function() {
    console.log("llegando al destino");
},
aterrizar:function(){
    console.log("aterrizando");
}
}
//16.
const Paquete = {
    contenido : [
        {nombre: "libro"},
        {pesa: "1kg"},
    ]
}
//17.
const Pais ={
    numHabitantes: "8.000.000",
    continente: "África",
    gentilicio: "Marlawense"
}
//18.
const codError = O_Error.codigo;
//19.
const integrantes = Grupo.integrantes
//20.
const nivelesTinta = Impresora.tinta;
//21.
const pixeles = Pantalla.pixeles
//22.
const especificaciones = Movil["especificaciones"]
//23.
Grupo.numIntegrantes = 5;
//24.
Pantalla.dimensiones = "1920x1080"
//25.
Led.encendido = !Led.encendido;
//26.
Movil.temperatura = "20º";