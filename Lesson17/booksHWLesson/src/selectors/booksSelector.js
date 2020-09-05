import { createSelector} from 'reselect'
import C from '../constants'

const books = state => state.books;
const categories = state => state.categoriesBooks.categories;

export const bookSelector = createSelector(books, categories, (books, categories) => {
    return books.map(book => ({
        ...book,
        categoryName: categories[book.categoryId].title
    }))
}

)

export const selectBooksEdit = (book) => {
    return{
        type: C.EDIT_BOOK,
        payload: book
    }
}
