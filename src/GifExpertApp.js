import React, { useState } from 'react'

export const GifExpertApp = () => {
    //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setcategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);

    const handledAdd = () => {
        setcategories(categories => [...categories, 'Naruto']);
    }

    return (
        <>
            <h1>GifExertApp</h1>
            <hr/>

            <button onClick={ handledAdd }>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    );
} 
