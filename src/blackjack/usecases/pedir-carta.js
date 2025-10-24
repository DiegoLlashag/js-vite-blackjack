/**
 *  Esta funcion me permite tomar una carta
 * @param {Array<string>} deck 
 * @returns {string} retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log({deck})
    return carta;
}