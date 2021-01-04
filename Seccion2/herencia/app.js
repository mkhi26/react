class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea {

    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad
    }
}

tarea1 = new Tarea("Aprender React", "Alta");

pendiente = new ComprasPendientes("Jabon", "Alta", 25);

console.log(tarea1);
console.log(pendiente);