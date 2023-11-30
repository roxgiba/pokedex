This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Pokedex App

## Overview

The Pokedex app is a React application that allows users to search for and explore information about Pokemon using the [PokeAPI](https://pokeapi.co/). Users can search for a specific Pokemon by name and navigate through the Pokemon list using arrow buttons. The app provides details such as ID, height, weight, abilities, and types for the selected Pokemon.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/roxgiba/pokedex.git
   ```
2. Navigate to the project directory:
   ```
   cd pokedex
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   Access the application at http://localhost:3000.

## Features
- **Search**: Enter the name of a Pokemon in the search bar and press the search button or hit Enter to fetch and display detailed information about that Pokemon.
- **Navigation**: Use the left and right arrow buttons to navigate to the previous or next Pokemon in the list.

## Usage
1. **Open the application in your web browser**.

2. **Search for a Pokemon**:
   - Enter the name of the Pokemon in the search bar.
   - Press the search button or hit Enter.
     
3. **View Pokemon Details**:
   - The app displays detailed information about the selected Pokemon, including ID, height, weight, abilities, and types.
     
4. **Navigate Through Pokemon List**:
   - Use the left arrow button to view the previous Pokemon.
   - Use the right arrow button to view the next Pokemon.
  
## Dependencies
- **React**: JavaScript library for building user interfaces.
- **React Icons (FaArrowLeft, FaArrowRight)**: Icon library for arrow buttons.
- **PokeAPI**: External API providing Pokemon data.

## Code Structure
- **Components**:
    - _Home_: Main component containing the application logic.
- **State Management**:
    - State variables (_data, searchTerm, searchedData, currentPokemonId_) manage the UI and data flow.
- **API Integration**:
    - The app interacts with the PokeAPI to fetch Pokemon data based on the user's search query.
- **Event Handling**:
    -  Functions like _handleSearch, handleKeyUp, handleKeyLeft, handleKeyRight, nextPokemon_, and _previousPokemon_ handle user inputs and interactions.
 
## Acknowledgements
[PokeAPI](https://pokeapi.co/): Providing the data used in this application.
