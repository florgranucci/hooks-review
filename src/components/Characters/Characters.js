import axios from 'axios';
import { useState, useReducer, useCallback,  useMemo, useRef } from 'react';
import useCharacters from '../../hooks/useCharacters';
import Character from './Character/Character';
import Search from '../Search/Search';

const initialState = {
    favourites: []
}

const favouritesReducer = (state,  action) => {
    switch(action.type){
 case 'ADD_TO_FAVOURITE':
     return {
         ...state,
         favourites: [...state.favourites, action.payload]
     }
     default: 
     return state;
    }
}

const API = 'https://rickandmortyapi.com/api/character';

export const Characters = () => {

    const [favourites, dispatch] = useReducer(favouritesReducer, initialState)
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleFavourite = (favourite) => {
        dispatch({
            type: 'ADD_TO_FAVOURITE',
            payload: favourite
        })
    }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, []);
    
    const filteredUsers = useMemo(() => 
        characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())),
        [characters, search]
    )
    
    return (
        <section>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <div>
                {favourites.favourites.map(fav => (
                    <img style={{borderRadius: 150, width: 80, height: 80}} key={fav.id} src={fav.image} />
                ))}
            </div>
            <div className='Characters'>
                {filteredUsers.map(c => (
                    <Character key={c.id} addFav={handleFavourite} character={c} />
                ))}
            </div>
        </section>
    )
}

export default Characters;
