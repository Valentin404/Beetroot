import React from "react"
import BookList from "./books/BooksList";
import {BrowserRouter , Route, NavLink} from 'react-router-dom'
import AddBooks from './books/AddBooks'
// import {NavLink} from "react-router-dom"
const App = props => (
    <BrowserRouter>
     <div className={'container'}>
     <NavLink exact to="/Books"><h1>Books</h1></NavLink>
     <NavLink exact to="/AddBooks"><h1>AddBooks</h1></NavLink>
     <div className={'row'}>
    <Route path="/Books"
                        render={() => (
                            <>
                            <div className={'col-sm-3'}>
                            <h2>Categories</h2>
                        </div>
            
                        <div className={'col-sm-9'}>
                            <BookList />
                        </div>
                        </>
                        )}/> 
   
       {/* <Route
        path="/AddBooks"
        render={() => (
            <div className="six wide column">
                <AddBooks />
            </div>
        )}/> */}
   
         
           <Route path="/AddBooks"
                        render={() => (
                            <div className="six wide column">
                                <AddBooks />
                            </div>
                        )}/>
        </div>
    </div>
    </BrowserRouter>
)

export default App
