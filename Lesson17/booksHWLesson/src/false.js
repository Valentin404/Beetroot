
// // book

// const Book = ({book, isActive, toggle, category}) => {
//     const [redirect, setRedirect] = useState(false);
//     return (
//     <li className={'list-group-item'}>
//         <h2 onClick={toggle}>{book.title}</h2>
//         <p>Category: {category.title}</p>

//         {/* {isActive && <p>{book.desc}</p>} */}
       
//         {isActive && (<><p>{book.desc}</p>
//             <button onClick={()=>{
//                 setRedirect(true)
//             }}>Edit Book</button></>
//             )}
//           {/* <NavLink to={`/edit-book/${book._id}`}><EditBook book={editBook(book)}/></NavLink> */}
//     </li>
//     )
// }
// Book.propTypes = {
//     book: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         categoryId: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         desc: PropTypes.string.isRequired,
//     }),
//     isActive: PropTypes.bool,
//     category: PropTypes.object.isRequired,
// }

// function mapStateToProps(state, ownProps) {
//     const {categories} = state.categoriesBooks;

//     return {
//         isActive: state.activeBook === ownProps.book._id,
//         category: categories[ownProps.book.categoryId],
//     }
// }

// function mapDispatchToProps(dispatch, ownProps) {
//     return {
//         toggle: () => {
//             dispatch(selectBook(ownProps.book._id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Book);


///BookForm


const BookForm = ({categories, addBookAction}) => {
    const [redirect, setRedirect] = useState(false);
    const {register, handleSubmit, errors, control, setError, getValues} = useForm();
    const options = [{value: '-1', label: 'Choose category'}]
    // const editBook = props.book
 
    // const win = ()=>{
    //     let pathname = window.location.pathname.replace(/\/add-book\/([A-Z,0-9,a-z,_]+)/, '$1')
    //     console.log(pathname)
    //     // console.log(props)
    // }
    // win()
    categories.map(cat => options.push(({value: cat._id, label: cat.title })))
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
                />
                {errors.desc && "Description  is required."}
            </div>

            <div className="form-group">
                <Controller as={<Select options={options} />}
                    control={control}
                    ref={register({ required: true })}
                    onChange={([selected]) => selected }
                    name="categoryId"
                    defaultValue={options[0]}
                />
                {errors.categoryId && 'Categories is required'}
            </div>

            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        const {categoryId} = getValues();

                        if (categoryId.value === '-1') {
                            setError('categoryId', 'No choosen category')
                        }
                    }}
                >Submit</button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks;
    return {
        categories: mapToArr(categories)
    }
}

// function matchDispatchToProps(dispatch) {
//     return  bindActionCreators({selectBooksEdit: selectBooksEdit}, dispatch)
// }

// export default connect(mapStateToProps, {addBookAction, matchDispatchToProps})(BookForm);

export default connect(mapStateToProps, {addBookAction})(BookForm);
