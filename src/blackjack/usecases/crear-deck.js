import _ from 'underscore';

/**
 *  Esta funcion crea un nuevoi deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('Tipos de carta son necesarios');
    if(tiposDeCarta.length === 0) throw new Error('Tipos de carta no pueden estar vacíos');

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de carta deben ser un arreglo');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;
// forma de importar: 
// import crearNuevoDeck from './usecases/crear-deck'
// se puede cambiar el nombre automaticamente


