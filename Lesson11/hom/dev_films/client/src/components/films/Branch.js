import React from 'react'
import FilmCard from './FilmCard'
import Featured from './Featured'
import PropTypes from "prop-types"


// Если что, я так назвал потому что так было сказано в лмс

const Branch = ({film, iseye}) => {
    return (
        iseye
        ?<>
         {film.description}
        </>
        :<>
        <span className="ui right corner label">
        <i className="empty star icon" />
      </span>
              <div className="image">
                  <span className="ui green label ribbon">$ {film?.price} </span>
                  <Featured featured={film.featured} id={film._id} />
                  <img src={film?.img} alt={film?.title} />
              </div>
              </>
    )
}

Branch.propTypes = {
    film: PropTypes.shape({
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
    }),
}

export default Branch