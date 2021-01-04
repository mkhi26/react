# Object constructor:

    function Tarea(nombre, urgencia){
        tis.nombre = nombre;
        this.urgencia = urgencia;
    }

**Agregando un prototype a Tarea**
====
    Tarea. prototype.mostrarInformacionTarea= function(){
        return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
    }