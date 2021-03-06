//clase padre
class enemigo {

    decir_pacman() {
        console.log('soy un villano del juego pacman')
    }

    decir_wario() {
        console.log('soy un villano de mario bros')
    }

    decir_thanos() {
        console.log('soy un villano de avengers')
    }

}
//clases hijas

class wario extends enemigo {

    constructor() {
        const name = 'Wario'
        const level = 50

        console.log('Mi nombre:', name + ' Mi nivel de poder', level)
        super();

        this.decir_wario();
    }

    getName() {
        return 'mi nuevo nombre de villano es:' + 'Wario1';
    }

    getLevel() {
        return 'mi nuevo nivel de poder es ' + 200;

    }

}


class pacman extends enemigo {
    constructor() {
        const name = 'Pacman'
        const level = 100

        console.log('Mi nombre:', name + 'Mi nivel de poder es', level)

        super();
        this.decir_pacman();
    }

    getName() {
        return 'mi nuevo nombre de villano es:' + 'pacman1';
    }

    getLevel() {
        return 'mi nuevo nivel de poder es ' + 200;

    }

}


class thanos extends enemigo {
    constructor() {
        const name = 'Thanos'
        const level = 1000

        console.log('Mi nombre:', name + ' Mi nivel de poder es', level)
        super();

        this.decir_thanos();
    }

    getName() {
        return 'mi nuevo nombre de villano es:' + 'Thanos1';
    }

    getLevel() {
        return 'mi nuevo nivel de poder es ' + 2000;

    }
}

//Aplicaciones de todos los patrones estructurales y creacionales

//Declaración de patrón creacional FACTORY en una clase
//Permitir realizar muchos cambios en este caso nuevas instancias
class entidadFactory {
    constructor(tipoVillano) {

        switch (tipoVillano) {
            case 'wario':
                const warioNuevo = new wario();
                return warioNuevo

            case 'thanos':
                const thanosNuevo = new thanos();
                return thanosNuevo

            case 'pacman':
                const pacmanNuevo = new pacman();
                return pacmanNuevo
            default:
                return null;

        }

    }

}


//Declaración patron estructural DECORADOR en una clase 
//comportamiento propio
class enemyDecorator {
    constructor(wario) {
        this.wario = wario;
    }

    getName() {
        return this.traslate();
    }

    getLevel() {
        return this.getLevel();
    }

    traslate() {
        return this.wario.getName() + ' soy poderoso y malo';
    }

}

//Resultado patron DECORADOR
console.log('Aplicación con Patron estructural Decorator:')
console.log()
const warioSay = new entidadFactory('wario');
const ver = new enemyDecorator(warioSay);
console.log(ver.getName())
console.log('-----------------')

//Resultado con patron de diseño FACTORY
console.log('Aplicación con Patron Creacional Factory:')
console.log()
const warioSayy = new entidadFactory('wario');
console.log('-----------------')
const pacmanSay = new entidadFactory('thanos');
console.log('-----------------')
const thanosSay = new entidadFactory('pacman');

