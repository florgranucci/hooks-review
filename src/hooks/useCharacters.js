import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacters = url => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(res => {
        setCharacters(res.data.results);
        })
    .catch(err => console.log(err));
  }, [url]);

  return characters;

};

export default useCharacters;