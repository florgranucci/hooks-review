import { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    return (
        <div>
            <h2 style={{ color }}>Rick & Morty</h2>
        </div>
    )
}

export default Header
