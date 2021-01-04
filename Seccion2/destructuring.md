**Con el sigueinte objeto:**

    const aprendiendoJS = {
        version:{
            nueva: 'ES6',
            anterior: 'ES5'
        },
        frameworks: ['React', 'VueJS', 'AngularJS'] 
    }

# Destructuring:

    Destructuring es extrar valores de un objeto.

- En versiones anteriores:

        let version = aprendiendoJS.version.nueva;
        let framework = aprendiendoJS.frameworks[1];

- En versiones nuevas:

        let {version, framework} = aprendiendoJS;        

