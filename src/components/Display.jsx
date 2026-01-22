import { useState, useEffect, useRef } from "react";
import Card from '../components/Card.jsx'


function Display({ start, end }) {

    const [myData, setMyData] = useState("");
    const [AllPokemonData, setAllPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`)
                const final_pokemon_data = await response.json();

                setMyData(final_pokemon_data);
                setAllPokemonData(final_pokemon_data.results);

            } catch (err) {
                console.error("this is error");
            } 
        }

        fetchData()
    }, [])


    return (
        <div className="flex justify-evenly flex-wrap items-center border-none">
            {
                AllPokemonData.slice(start, end).map(key => (
                    <Card key={key.name} url={key.url} name={key.name} />
                ))
            }
        </div>
    )
}

export default Display