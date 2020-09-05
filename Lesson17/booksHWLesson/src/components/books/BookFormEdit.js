import React, {useState} from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import {Redirect} from 'react-router-dom'
import { mapToArr } from '../../utils'
import {addBookAction, editBook} from '../../ac/index'
import { useForm, Controller } from 'react-hook-form'
import {bindActionCreators} from 'redux'
import {selectBooksEdit} from '../../selectors/booksSelector'
import categoriesBooks from '../../reducers/categoriesBooks'


const bookData = {
    title: '',
    desc: '',
    categoryId: ''
}

const BookFormEdit = (props) => {
    const [redirect, setRedirect] = useState(false);
    const {register, handleSubmit, errors, control, setError, getValues} = useForm();
    const options = [{value: '-1', label: 'Choose category'}]

    // options.push(({value: cat._id, label: cat.title }))

    
    const  [data, setData] = useState(bookData)
    // const editBook = props.book
    // const win = ()=>{
    //     let pathname = window.location.pathname.replace(/\/add-book\/([A-Z,0-9,a-z,_]+)/, '$1')
    //     console.log(pathname)
    //     // console.log(props)
    // }
    // win()
    // categories.map(cat => options.push(({value: cat._id, label: cat.title })))
    // console.log(addBookAction)f  
    function onSubmit(data, event) {
        event.preventDefault();
        if( errors.categoryId) {
            setError('categoryId')
            return
        }
        data =  {...data, categoryId: data.categoryId.value}
        addBookAction(data);
        setRedirect(true);
        console.log(data);
        console.log(editBook(data))
    }
    const categor = ()=>{
        // debugger
        return  mapToArr(props.categoriesBooks[0]).map(i=> [i][0].title)
    }
    console.log(categor())
// console.log(mapToArr(props.categoriesBooks[0]))
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
            {redirect && <Redirect to="/" />}
            <div className="form-group">
                <label html-for="title">Title</label>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    // ref={register({ required: true })}
                />
                {errors.title && "Title is required."}
            </div>
            <div className="form-group">
                <label html-for="desc">Description</label>
                <textarea
                    name="desc"
                    id="title"
                    type="text"
                    className="form-control"
                    // ref={register({ required: true })}
                />
                {errors.desc && "Description  is required."}
            </div>

            <div className="form-group">
                <Controller as={<Select options={categor()} />}
                    control={control}
                    // ref={register({ required: true })}
                    // onChange={([selected]) => selected }
                    name="categoryId"
                    // defaultValue={mapToArr(props.categoriesBooks[0])[0].title}
                />
                {errors.categoryId && 'Categories is required'}
            </div>

            <div className="form-group">
                <button
                    className="btn btn-primary"
                    // onClick={() => {
                    //     const {categoryId} = getValues();

                    //     if (categoryId.value === '-1') {
                    //         setError('categoryId', 'No choosen category')
                    //     }
                    // }}
                >Submit</button>
            </div>
        </form>
    )
}

// function mapStateToProps(state) {
//     const {categories} = state.categoriesBooks;
//     return {
//         categories: mapToArr(categories)
//     }
// }

function mapStateToProps(state) {
    return {
        books: state.books,
        categoriesBooks: mapToArr(state.categoriesBooks)
    }
}

function matchDispatchToProps(dispatch) {
    return  bindActionCreators({selectBooksEdit: selectBooksEdit}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BookFormEdit);
// export default connect(mapStateToProps)(BookFormEdit);










// <select>
//   <option>Пункт 1</option>
//   <option>Пункт 2</option>
// </select>




// const BookFormEdit = (props) => {
//     const [redirect, setRedirect] = useState(false);
//     const {register, handleSubmit, errors, control, setError, getValues} = useForm();
//     const options = [{value: '-1', label: 'Choose category'}]


//     const  [data, setData] = useState(bookData)
//     // const editBook = props.book
//     // const win = ()=>{
//     //     let pathname = window.location.pathname.replace(/\/add-book\/([A-Z,0-9,a-z,_]+)/, '$1')
//     //     console.log(pathname)
//     //     // console.log(props)
//     // }
//     // win()
//     // categories.map(cat => options.push(({value: cat._id, label: cat.title })))
//     // console.log(addBookAction)f  
//     function onSubmit(data, event) {
//         event.preventDefault();
//         if( errors.categoryId) {
//             setError('categoryId')
//             return
//         }
//         data =  {...data, categoryId: data.categoryId.value}
//         addBookAction(data);
//         setRedirect(true);
//         console.log(data);
//         console.log(editBook(data))
//     }
// console.log(mapToArr(props.categoriesBooks[0])[0].title)
//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
//             {redirect && <Redirect to="/" />}
//             <div className="form-group">
//                 <label html-for="title">Title</label>
//                 <input
//                     name="title"
//                     id="title"
//                     type="text"
//                     className="form-control"
//                     // ref={register({ required: true })}
//                 />
//                 {errors.title && "Title is required."}
//             </div>
//             <div className="form-group">
//                 <label html-for="desc">Description</label>
//                 <textarea
//                     name="desc"
//                     id="title"
//                     type="text"
//                     className="form-control"
//                     // ref={register({ required: true })}
//                 />
//                 {errors.desc && "Description  is required."}
//             </div>

//             <div className="form-group">
//                 <Controller as={<Select options={mapToArr(props.categoriesBooks[0])[0].title} />}
//                     control={control}
//                     // ref={register({ required: true })}
//                     // onChange={([selected]) => selected }
//                     name="categoryId"
//                     defaultValue={props.categoriesBooks[0]}
//                 />
//                 {errors.categoryId && 'Categories is required'}
//             </div>

//             <div className="form-group">
//                 <button
//                     className="btn btn-primary"
//                     // onClick={() => {
//                     //     const {categoryId} = getValues();

//                     //     if (categoryId.value === '-1') {
//                     //         setError('categoryId', 'No choosen category')
//                     //     }
//                     // }}
//                 >Submit</button>
//             </div>
//         </form>
//     )
// }

// // function mapStateToProps(state) {
// //     const {categories} = state.categoriesBooks;
// //     return {
// //         categories: mapToArr(categories)
// //     }
// // }

// function mapStateToProps(state) {
//     return {
//         books: state.books,
//         categoriesBooks: mapToArr(state.categoriesBooks)
//     }
// }

// function matchDispatchToProps(dispatch) {
//     return  bindActionCreators({selectBooksEdit: selectBooksEdit}, dispatch)
// }

// export default connect(mapStateToProps, matchDispatchToProps)(BookFormEdit);
// // export default connect(mapStateToProps)(BookFormEdit);

