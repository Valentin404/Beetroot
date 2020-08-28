import React, {Component, useState, useEffect} from "react"
import api from "./api"
import FilmsList from "./films/index"
import {AppContext} from './App'
import FilmForm from "./forms/FilmForm"
import {orderBy, find} from 'lodash';
import AdminRoute from './AdminRoute'

const FilmsPage = props => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
    api.films
            .fetchAll()
            .then(films =>
                setFilms({films: sortFilms(films)}),
            )
            .then(setIsLoading(false))
})
const sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])
const toggleFeatured = id => {
    const film = find(films, {_id: id})

    return updateFilm({...film, featured: !film.featured})
}

const saveFilm = film => (film._id ? updateFilm(film) : addFilm(film))

const addFilm = filmData =>
    api.films.create(filmData)
    .then(film =>
        setFilms((films, showAddForm) => {
            sortFilms([...films, {...film}],
            showAddForm = false,
        )}),
    )
    // debugger
const updateFilm = filmData => 
api.films.update(filmData)
    .then(film =>
        setFilms(films => 
            sortFilms( films.map(item => (item._id === film._id ? film : item))),
            )
    )

const deleteFilm = film =>
    api.films.delete(film).then(() =>
        setFilms(({films}) => ({
            films: sortFilms(films.filter(item => item._id !== film._id)),
        })),
    )
    

    return (
        <AppContext.Provider
        value={{
            toggleFeatured: toggleFeatured,
            deleteFilm: deleteFilm,
            user: props.user,
        }}
    >
        <div className="ui stackable grid">
                <>
                    <AdminRoute  path="/films/new"
                                 user={props.user}
                                 render={() => (
                                     <div className="six wide column">
                                         <FilmForm submit={saveFilm} film={{}} />
                                     </div>
                                 )}
                    />

                    <AdminRoute  path="/films/edit/:_id"
                                 user={props.user}
                                 render={({match}) => (
                                     <div className="six wide column">
                                         <FilmForm  submit={saveFilm}
                                                    film={find(films, {_id: match.params._id}) || {}}
                                         />
                                     </div>
                                 )}
                    />
                </>

            <div className={`${props.location.pathname === "/films" ? "sixteen" : "ten"} wide column`}>

             
                {
                    isLoading ? (
                        <div className="ui icon message">
                            <i className="notched circle loading icon" />
                            <div className="content">
                                <div className="header">films loading</div>
                            </div>
                        </div>
                    ) : (
                        <FilmsList films={films}  deleteFilm={deleteFilm} />
                    )
                }
            </div>
        </div>
    </AppContext.Provider>
    )

}
// editFilm={selectFilmForEdit}



// class FilmsPage extends Component {
//     state = {
//         films: [],
//         isLoading: true,
//     }

//     componentDidMount() {
//         api.films
//             .fetchAll()
//             .then(films =>
//                 this.setState({films: this.sortFilms(films), isLoading: false}),
//             )
//     }


//     sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

//     toggleFeatured = id => {
//         const film = find(this.state.films, {_id: id})

//         return this.updateFilm({...film, featured: !film.featured})
//     }

//     saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))

//     addFilm = filmData =>
//         api.films.create(filmData).then(film =>
//             this.setState(({films, showAddForm}) => ({
//                 films: this.sortFilms([...films, {...film}]),
//                 showAddForm: false,
//             })),
//         )

//     updateFilm = filmData =>
//         api.films.update(filmData).then(film =>
//             this.setState(({films, showAddForm}) => ({
//                 films: this.sortFilms(
//                     films.map(item => (item._id === film._id ? film : item)),
//                 ),
//                 showAddForm: false,
//             })),
//         )

//     deleteFilm = film =>
//         api.films.delete(film).then(() =>
//             this.setState(({films}) => ({
//                 films: this.sortFilms(films.filter(item => item._id !== film._id)),
//             })),
//         )

//     render() {
//         const {films, loading} = this.state
//         const numCol = this.props.location.pathname === "/films" ? "sixteen" : "ten"

//         return (
//             <AppContext.Provider
//                 value={{
//                     toggleFeatured: this.toggleFeatured,
//                     deleteFilm: this.deleteFilm,
//                     user: this.props.user,
//                 }}
//             >
//                 <div className="ui stackable grid">
//                         <>
//                             <AdminRoute  path="/films/new"
//                                          user={this.props.user}
//                                          render={() => (
//                                              <div className="six wide column">
//                                                  <FilmForm submit={this.saveFilm} film={{}} />
//                                              </div>
//                                          )}
//                             />

//                             <AdminRoute  path="/films/edit/:_id"
//                                          user={this.props.user}
//                                          render={({match}) => (
//                                              <div className="six wide column">
//                                                  <FilmForm  submit={this.saveFilm}
//                                                             film={find(films, {_id: match.params._id}) || {}}
//                                                  />
//                                              </div>
//                                          )}
//                             />
//                         </>

//                     <div className={`${numCol} wide column`}>
//                         {
//                             loading ? (
//                                 <div className="ui icon message">
//                                     <i className="notched circle loading icon" />
//                                     <div className="content">
//                                         <div className="header">films loading</div>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <FilmsList films={this.state.films}  deleteFilm={this.deleteFilm} />
//                             )
//                         }
//                     </div>
//                 </div>
//             </AppContext.Provider>
//         )
//     }
// }

export default FilmsPage
