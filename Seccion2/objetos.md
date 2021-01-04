**Objetos en Javascript**
====

- Object literal:

        const persona {
            nombre: 'Juan',
            profecion: 'Desarrollador Web'
        }

- Object Constructor:

        function Tarea(nombre, urgencia){
            this.nombre = nombre
            this.urgencia = urgencia
        }
    
    Instancia del objeto Tarea:

        const tarea1 = new Tarea('Aprender Javascript y React', 'urgente');

