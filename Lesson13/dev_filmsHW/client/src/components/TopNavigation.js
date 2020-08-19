import React from "react"
import {NavLink} from 'react-router-dom'
import PropTypes from "prop-types"

const TopNavigation = () => (
    <div className="ui secondary pointing menu">
        <NavLink exact to="/" className={'item'}>
            Home
        </NavLink>
        <NavLink exact to="/films" className="item">
            Films
        </NavLink>
        <NavLink exact to="/films/new" className="item">
            <i className="icon plus" />
            Add new film
        </NavLink>
        {/* <NavLink exact to="/detalis" className="item">
        Film details 
        </NavLink> */}
    </div>
)

TopNavigation.propTypes = {
    showAddForm: PropTypes.func.isRequired,
}

export default TopNavigation
