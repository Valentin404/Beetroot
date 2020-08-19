import React, {Component} from "react"
import {Route} from 'react-router-dom';
import FilmForm from "./forms/FilmForm"
import FilmsList from './films'
import {AppContext} from './App';
import {orderBy, find} from 'lodash';
import api from '../api';
import FilmDetalis from './films/FilmDetalis'

class FilmsPage extends Component {
    state = {
        films: [],
        isLoading: true,
    }

    componentDidMount() {
        api.films.fetchAll()
            .then(films =>
                    this.setState({
                        films: this.sortFilms(films),
                        isLoading: false,
        }),
        )
    }

    sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

    toggleFeatured = id => {
        const film = find(this.state.films, {_id: id})
        return this.updateFilm({...film, featured: !film.featured})
    }

    saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))
    // saveFilm = film =>
    //     (film._id ? this.updateFilm(film) : this.addFilm(film))
    //         .then(() => this.props.history.push('/films'))

    addFilm = filmData =>
        api.films.create(filmData).then(film =>
            this.setState(({films}) => ({
                films: this.sortFilms([...films, {...film}]),
                showAddForm: false,
            }))
        )

    updateFilm = filmData =>
        api.films.update(filmData).then(film =>
        this.setState(({films}) => ({
            films: this.sortFilms(
                films.map(item => (item._id === film._id ? film : item)),
            ),
            showAddForm: false,
        })),
    )

    deleteFilm = film =>
        api.films.delete(film).then(() =>
            this.setState(({films}) => ({
                films: this.sortFilms(films.filter(item => item._id !== film._id)),
            })),
    )

    render() {
        const {films} = this.state
        console.log('routing', this.props)
        const numCol = this.props.location.pathname === "/films" ? "sixteen" : "ten"

        return (
            <AppContext.Provider
                value={{
                    toggleFeatured: this.toggleFeatured,
                    deleteFilm: this.deleteFilm
                }}
            >
                <div className="ui stackable grid">
                    <Route
                        path="/films/new"
                        render={() => (
                            <div className="six wide column">
                                <FilmForm  submit={this.saveFilm}
                                            film={{}}  />
                            </div>
                        )}
                    />

                    <Route
                        path="/films/edit/:_id"
                        render={props => (
                            <div className="six wide column">
                                <FilmForm
                                    submit={this.saveFilm}
                                    film={ find(this.state.films, { _id: props.match.params._id }) }
                                />
                            </div>
                        )}
                    />
                    
                      <Route
                        // path="/films/edit/:_id"
                        path="/films/details"
                        render={()=> (
                            <div className="six wide column">
                                <FilmDetalis
                                />
                            </div>
                        )}
                    />

                    <div className={`${numCol} wide column`}>
                        {
                            this.state.isLoading ? (
                                <div className="ui icon message">
                                    <i className="notched circle loading icon" />
                                    <div className="content">
                                        <div className="header">films loading</div>
                                    </div>
                                </div>
                            ) : (
                                <FilmsList films={films}/>
                            )
                        }
                    </div>
                </div>
            </AppContext.Provider>
        )
    }
}

export default  FilmsPage
