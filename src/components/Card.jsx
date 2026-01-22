import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Card({ url, name, card }) {

    const [SinglePokemonData, setSinglePokemonData] = useState();
    const [pokemonSprite, setPokemonSprite] = useState("");

    function saveToLocalStorage(url){
        localStorage.setItem("url", JSON.stringify(url));
    }


    useEffect(() => {
        let mounted = true;
        if (!url) return; // guard against missing url
        // if (pokemon) return;

        async function fetchSinglePokemonData(url) {
            const response = await fetch(url);
            const PokemonData = await response.json();

            setSinglePokemonData(PokemonData);
            setPokemonSprite(PokemonData?.sprites?.front_default || "")

        }

        fetchSinglePokemonData(url)

        return () => { mounted = false; }

    }, [url])


    let id = SinglePokemonData?.game_indices[3]?.game_index;

    return (
        <NavLink
            to={name ? `/card/${name}` : '#'}
            onClick={() => saveToLocalStorage(url)}
        >
            <div className="h-[200px] sm:h-[280px] w-[136px] sm:w-[200px] flex-col justify-center rounded-2xl border-black border-[1.5px] m-3 cursor-pointer">
                <div className="bg-green-300 w-full h-[70%] rounded-xl flex justify-center">
                    {pokemonSprite ? <img src={pokemonSprite} alt="pokemon" className="h-33" /> : "loading..."}
                </div>
                <div className="flex justify-between mt-[10px] px-2">
                    <div>
                        <div>{id || "Loding..."}</div>
                        <div className="font-bold">{name}</div>
                    </div>
                    <div>
                        <div>{SinglePokemonData?.types[0]?.type?.name}</div>
                        <div>{SinglePokemonData?.types[1]?.type?.name}</div>
                    </div>
                </div>

            </div>
        </NavLink>
    )
}
export default Card