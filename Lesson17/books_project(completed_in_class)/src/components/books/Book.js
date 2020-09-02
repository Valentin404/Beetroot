import React from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../../ac'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"

const Book = ({book, isActive, toggle}) => (
    <li className={'list-group-item'}>
        <NavLink  to={`/Books/${book.title}`} onClick={toggle}>{book.title}</NavLink>
        <p>Category: {book.categoryId}</p>
        {isActive && <p>{book.desc}</p>}
    </li>
)

Book.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        categoryId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool
}

function mapStateToProps(state, ownProps) {
    return {
        isActive: state.activeBook === ownProps.book._id
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggle: () => {
            dispatch(selectBook(ownProps.book._id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
