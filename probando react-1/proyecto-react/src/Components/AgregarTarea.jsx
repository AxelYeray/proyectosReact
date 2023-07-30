import { useState } from 'react';

export const AgregarTarea = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Ingrese una tarea nueva'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}