import React, {useState} from "react"
import Featured from "./Featured"
import PropTypes from "prop-types"
import Branch from './Branch'

const FilmCard = ({film}) => {
    console.log("---- rendered ---", film._id)

    const [iseye, setIseye] = useState(false)
    const clilcEYE =()=> setIseye(!iseye) 


    return (
        <div className="ui card">
            {/* {iseye
            ?  */}
             <Branch film={film} iseye={iseye}/>
{/* //            : <>
//   <span className="ui right corner label">
//   <i className="empty star icon" />
// </span>
//         <div className="image">
//             <span className="ui green label ribbon">$ {film?.price} </span>
//             <Featured featured={film.featured} id={film._id} />
//             <img src={film?.img} alt={film?.title} />
//         </div>
//         </> */}

    {/* <span className="ui right corner label">
      <i className="empty star icon" />
    </span>
            <div className="image">
                <span className="ui green label ribbon">$ {film?.price} </span>
                <Featured featured={film.featured} id={film._id} />
                <img src={film?.img} alt={film?.title} />
            </div> */}

            <div className="content">
      <span href="#" className="header">
        {film?.title}
      </span>
                <div className="meta">
                    <i className="icon users" /> {film?.director}
                    <span className="right floated">
          <i className="icon wait right" />
                        {film?.duration} min
        </span>
                </div>
                <div class="eye" onClick={clilcEYE}>
                    {iseye? <i className="icon eye"/> : <i className="icon eye slash"/> }
                </div>
            </div>
        </div>
    )
}


FilmCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
        iseye: PropTypes.bool,
    }),
}

export default React.memo(FilmCard)
