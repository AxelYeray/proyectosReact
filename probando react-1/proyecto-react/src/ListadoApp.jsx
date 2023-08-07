import React, { useState } from 'react'
import { AgregarTarea } from './Components/AgregarTarea'

const Items = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '❌'}</li>
    );
}


export const ListadoApp = () => {

    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'nuevo', visto: false }])
    }

    let ListadoSecciones = [
        { id: 1, nombre: "Instalaciones", visto: true },
        { id: 2, nombre: "Uso de vite", visto: true },
        { id: 3, nombre: "Componentes", visto: true },
        { id: 4, nombre: "Variables en JSX", visto: true },
        { id: 5, nombre: "Props", visto: true },
        { id: 6, nombre: "Eventos", visto: true },
        { id: 7, nombre: "useState", visto: true },
        { id: 8, nombre: "Redux", visto: false },
        { id: 9, nombre: "CustomHooks", visto: false },
    ]

    const [arreglo, setArreglo] = useState(ListadoSecciones);


    const onAgregarTarea = (val) => {
        
        if(val < 1) return
        const envio = {
            id: arreglo.length+1,
            nombre, val,
            visto: false
        }

        setArreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>Listado de temas del curso</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
           
        </>
    )
}
