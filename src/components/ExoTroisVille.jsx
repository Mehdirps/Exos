import React, { useState } from 'react';

const ExoTroisVille = () => {

    const [cities, setCities] = useState([]);

    const addCity = (e) => {
        e.preventDefault();

        const cityName = e.target.city.value;
        const citiesCopy = [...cities];

        citiesCopy.push(cityName);
        setCities(citiesCopy);

        e.target.city.value = '';

    }


    const deleteCity = (e) => {

        const cityName = e.target.getAttribute('data-city');

        const citiesFiltered = cities.filter((city) => city !== cityName);

        setCities(citiesFiltered);

    }

    return (
        <>
            {
                cities.length === 0 ?
                    <p>Aucune villes</p> :
                    <ul>
                        {
                            cities.map((city, index) => (
                                <>
                                    <li key={index}>{city} <strong data-city={city} onClick={(e) => deleteCity(e)}>X</strong> </li>

                                </>
                            ))
                        }
                    </ul>
            }
            <form action="" onSubmit={(e) => addCity(e)}>
                <label htmlFor="city">Nom de la ville</label>
                <input type="text" name='city' id='city' />
                <button>Ajouter</button>
            </form>
        </>
    );
};

export default ExoTroisVille;