import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);

    /* const handledAdd = () => {
        setcategories(categories => [...categories, 'Naruto']);
    } */

    return (
        <>
            <h1>GifExertApp</h1>
            <AddCategory />
            <hr/>


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
