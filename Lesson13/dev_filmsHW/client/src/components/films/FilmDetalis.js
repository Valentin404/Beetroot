import React from 'react'
import {Link} from 'react-router-dom';

class FilmDetalis extends React.Component{
    render() {
        return(
            <>
             <Link to="/films" className="ui button">Come back</Link>
            </>
        )
    }
} 
export default FilmDetalis