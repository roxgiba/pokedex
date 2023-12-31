"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState(null);
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  const handleSearch = async () => {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

    try {
      const response = await fetch(searchURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setSearchedData(result);
    } catch (error) {
      console.error("An error occurred while fetching the data: ", error);
      setSearchedData(null);
    }
    setSearchTerm("");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      // Enter key was pressed, trigger search
      handleSearch();
    }
  };

  const handleKeyLeft = (e) => {
    if (e.keyCode === 37) {
      // Enter key was pressed, trigger search
      previousPokemon();
    }
  };

  const handleKeyRight = (e) => {
    if (e.keyCode === 39) {
      // Enter key was pressed, trigger search
      nextPokemon();
    }
  };

  const nextPokemon = async () => {
    const nextId = currentPokemonId + 1;
    await fetchPokemon(nextId);
  };

  const previousPokemon = async () => {
    if (currentPokemonId > 1) {
      const previousId = currentPokemonId - 1;
      await fetchPokemon(previousId);
    }
  };

  const fetchPokemon = async (pokemonId) => {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    try {
      const response = await fetch(searchURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setCurrentPokemonId(pokemonId);
    } catch (error) {
      console.error("An error occurred while fetching the data: ", error);
      setData(null);
    }
  };

  useEffect(() => {
    if (searchedData) {
      setData(searchedData);
      setCurrentPokemonId(searchedData.id);
    }
  }, [searchedData]);

  return (
    <main className="bg-green-50 min-h-screen">
      <div className="flex justify-around p-20">
        <h1 className="text-7xl font-bold text-red-500">Pokedex</h1>

        <div className="flex flex-start">
          <input
            className="rounded-l-lg border-2 border-blue-600 border-r-0 p-2 flex-grow-0" // Adjust the width (w-40) as needed
            placeholder="Search for pokemons"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              handleKeyUp(e);
              handleKeyLeft(e);
              handleKeyRight(e);
            }}
          />
          <button
            className="rounded-r-lg border-2 border-blue-600 px-2 border-l-0"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
      </div>

      <div className=" flex justify-evenly ">
        {searchedData ? (
          <>
            <div className="flex justify-center items-center text-2xl">
              <button className="bg-black-50" onClick={previousPokemon}>
                <FaArrowLeft />
              </button>
            </div>
            <div className="bg-slate-100 grid grid-cols-2 gap-4 place-content-around h-100 mx-60 border-4 rounded-lg border-black">
              <p className="text-3xl place-self-center tracking-widest ">
                {data?.name?.toUpperCase()}
              </p>
              <picture className="place-self-center">
                <img
                  src={
                    data?.sprites?.other?.["official-artwork"]?.front_default
                  }
                  alt={data.name}
                  width={300}
                  height={300}
                />
              </picture>
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <td className=" w-1/4 px-4 py-2 text-right">ID:</td>
                    <td className="w-2/3 p-2">#{data.id}</td>
                  </tr>
                  <tr>
                    <td className=" w-1/4 px-4 py-2 text-right">Height:</td>
                    <td className="w-2/3 p-2">{data.height} cm</td>
                  </tr>
                  <tr>
                    <td className="w-1/4 px-4 py-2 text-right">Weight:</td>
                    <td className="w-2/3 p-2">{data.weight} gr</td>
                  </tr>
                  <tr>
                    <td className="w-1/4 px-4 py-2 text-right">Abilities:</td>
                    <td className="w-2/3 p-2">
                      {data?.abilities?.map((abilityInfo, index) => (
                        <span
                          className="border-2 border-black mr-1 p-1"
                          key={index}
                        >
                          {abilityInfo?.ability?.name}
                          {index !== data.abilities.length - 1 && " "}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className=" w-1/4 px-4 py-2 text-right">Type:</td>
                    <td className="w-2/3 p-2">
                      {data?.types?.map((typeInfo, index) => (
                        <span
                          className="border-2 border-black mr-1 p-1"
                          key={index}
                        >
                          {typeInfo?.type?.name}
                          {index !== data.abilities.length - 1 && " "}
                        </span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table-auto">
                <tbody className="">
                  <tr>
                    <td className=" w-1/3 px-4 py-2 text-right">HP:</td>
                    <td className="w-2/3 p-2">...</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-2 text-right">Attack:</td>
                    <td className="w-2/3 p-2">...</td>
                  </tr>
                  <tr>
                    <td className="w-1/4 px-4 py-2 text-right">Defence:</td>
                    <td className="w-2/3 p-2">...</td>
                  </tr>
                  <tr>
                    <td className=" w-1/4 px-4 py-2 text-right">Sp. Attack:</td>
                    <td className="w-2/3 p-2">...</td>
                  </tr>
                  <tr>
                    <td className=" w-2/5 px-2 py-2 text-right">
                      Sp. Defence:
                    </td>
                    <td className="w-3/5 p-2">...</td>
                  </tr>
                  <tr>
                    <td className="w-1/4 px-4 py-2 text-right">Speed:</td>
                    <td className="w-2/3 p-2">...</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center text-2xl">
              <button onClick={nextPokemon}>
                <FaArrowRight />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}
