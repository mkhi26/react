# Metodos con arreglos:

        const personas = [
            {nmbre: 'Juan', edad:23, aprendiendo: 'JavasCript'},
            {nmbre: 'Pablo', edad:18, aprendiendo: 'PHP'},
            {nmbre: 'Alejandra', edad:21, aprendiendo: 'AdobeXD'},
            {nmbre: 'Caren', edad:30, aprendiendo: 'Python'},
            {nmbre: 'Miguel', edad:35, aprendiendo: 'ReactJS'}
        ]

- Filter:

        // Mayores de 28 años

        const mayores = personas.filter(persona =>){
            return persona.edad > 28
        }

- Find:

        // Qué aprende alejandra y su edad:

        const alejandra = personas.find(persona =>) {
            return persina.nombre == 'Alejandra';
        }
- Reduce:

        let total = personas.reduce((edatTotal, persona) => ){
            edatTotal + persona.edad;
        }