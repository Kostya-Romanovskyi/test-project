import React from 'react'
import Select from 'react-select'
import { getHeroes } from '../FetchHeroes'
import { useState, useEffect } from 'react'

const ChooseHero = () => {

    const [heroes, setHeroes] = useState([]);


    useEffect(() => {
        getHeroes().then(response => {
            response.data.map(({ name: value, localized_name: label }) => setHeroes(prevHerouse => [...prevHerouse, { value, label }]))
        })
    }, [])


    return (
        < Select options={heroes} />
    )

}
export default ChooseHero;