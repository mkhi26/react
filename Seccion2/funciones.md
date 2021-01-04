# Crando una función:

- Function Declaration:


        function saludar(nombre){
            console.log('Bienvenido '+ nombre)
        }

- Function expression:

        const cliente  = function(nombreCliente){
            console.log('Mostrando datos del cliente '+ nombrecliente)
        }

 La diferencia principal entre function declaretion y function expression es que podemos llamar la function Decaration antes de ser declarada, en cambio con function expression no se puede hacer eso.

 # Arrow function:
 Funciones que retornan.
 
    let viajando = function (destino){
        return `Viajando a la ciudad de ${destino}`;
    }
La forma comun de declarar Arrow function es la siguiente:

    let viajando = (destino) =>{
        return `Viajando a la ciudad de ${destino}`;
    } 
Tambien se puede usar de la manera siguiente, ya que implicitamente javascript sabe que un Arrow function retorna un valor:

    let viajando = function (destino)`Viajando a la ciudad de ${destino}`;
    


