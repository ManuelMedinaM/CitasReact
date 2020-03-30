import React from 'react';
import PropTypes from 'prop-types'


const Header = (props)=>{
    return(
        <header>
            <h1 className="text-center">{props.titulo}</h1>
        </header>

    )
}

/*Aqui escribimos el prototype que nos indicara el prop necesario para 
este componente y no se puede cambiar por ningun otro*/
Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header; 