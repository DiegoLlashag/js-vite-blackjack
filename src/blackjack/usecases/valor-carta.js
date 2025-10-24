export const valorCarta = ( carta ) => {

    if ( !carta ) {
        throw 'No hay carta';
    }

    const valor = carta.substring(0, carta.length - 1);
    console.log({valor})
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}