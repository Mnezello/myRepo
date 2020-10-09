import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../../styles/css/index.css';

library.add(faSearch);

const Header = (props) => {
  
    return(
        <div className="weatherSearch">
            <form onSubmit={props.api} className="weatherForm">
                <div className="searchContainer">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                    <input name="location" className="searchInput" type="text" placeholder="Digite o nome da cidade"></input>
                </div>
                <button className="searchButton">Buscar</button>
            </form>
        </div>
    );
}

export default Header;