import React from 'react';

const saludo = 'Hola Mundo';
const numero = 2;
const bool = true;
const arreglo = [1, 2, 3];
const objeto = { nombre: 'Juan', edad: 25 };
const fecha = new Date();

export const PrimerComponente = () => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{numero}</p>
            <p>{bool ? 'Verdadero' : 'Falso'}</p>
            <p>{arreglo.join(', ')}</p>
            <p>{JSON.stringify(objeto)}</p>
            <p>{fecha.toLocaleString()}</p>
        </>
    );
};