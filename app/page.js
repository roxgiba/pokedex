"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedData, setSearchedData] = useState(null);

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

  useEffect(() => {
    if (searchedData) {
      setData(searchedData);
    }
  }, [searchedData]);

  return (
    <main className="bg-green-50 min-h-screen">
      <div>{console.log(data)}</div>
      <div className="grid grid-cols-2 gap-4 place-content-around h-20 mx-60">
        <h1 className="text-3xl font-bold">Pokedex</h1>

        <div className="flex flex-start">
          <input
            class="rounded-l-lg border-2 border-blue-600 border-r-0"
            placeholder="Search for pokemons"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            class="rounded-r-lg border-2 border-blue-600 px-2 border-l-0"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
      </div>
      <div>
        {searchedData ? (
          <div className="grid grid-cols-2 gap-4 place-content-around h-100 mx-60">
            <p className="text-3xl place-self-center">
              {data?.name?.toUpperCase()}
            </p>
            <picture className="place-self-center">
              <img
                src={data?.sprites?.other?.["official-artwork"]?.front_default}
                alt={data.name}
                width={200}
                height={200}
              />
            </picture>
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className=" w-1/6 px-4 py-2 text-right">ID </td>
                  <td className="w-2/3 p-2">#{data.id}</td>
                </tr>
                <tr>
                  <td className=" w-1/6 px-4 py-2 text-right">Height</td>
                  <td className="w-2/3 p-2">{data.height}</td>
                </tr>
                <tr>
                  <td className="w-1/6 px-4 py-2 text-right">Weight</td>
                  <td className="w-2/3 p-2">{data.weight}</td>
                </tr>
                <tr>
                  <td className="w-1/6 px-4 py-2 text-right">Abilities</td>
                  <td className="w-2/3 p-2">
                    {data?.abilities?.map((abilityInfo, index) => (
                      <span key={index}>
                        {abilityInfo?.ability?.name}
                        {index !== data.abilities.length - 1 && " "}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className=" w-1/6 px-4 py-2 text-right">Type</td>
                  <td className="w-2/3 p-2">
                    {data?.types?.map((typeInfo, index) => (
                      <span key={index}>
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
                  <td className=" w-1/3 px-4 py-2 text-right">HP</td>
                  <td className="w-2/3 p-2">...</td>
                </tr>
                <tr>
                  <td className="w-1/3 px-4 py-2 text-right">Attack</td>
                  <td className="w-2/3 p-2">...</td>
                </tr>
                <tr>
                  <td className="w-1/4 px-4 py-2 text-right">Defence</td>
                  <td className="w-2/3 p-2">...</td>
                </tr>
                <tr>
                  <td className=" w-1/4 px-4 py-2 text-right">Sp. Attack</td>
                  <td className="w-2/3 p-2">...</td>
                </tr>
                <tr>
                  <td className=" w-2/5 px-4 py-2 text-right">Sp. Defence</td>
                  <td className="w-3/5 p-2">...</td>
                </tr>
                <tr>
                  <td className="w-1/4 px-4 py-2 text-right">Speed</td>
                  <td className="w-2/3 p-2">...</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </main>
  );
}
