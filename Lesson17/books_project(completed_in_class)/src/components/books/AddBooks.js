import React, { useState } from 'react'
import {connect} from 'react-redux'
import {generate as id} from "shortid"
import setFormObject from '../help/FormUtils'
import { NavLink } from 'react-router-dom'
const initdata = {
    title: '',
    desc:'',
    categoryId: '',
}

const AddBooks = (props) => {
    const [data, setData] = useState(initdata)


    const AddBooksRedusers = ()=>{
        props.books.push({ 
            _id: id(),
            title: data.title,
            desc:data.desc,
            categoryId: data.categoryId ,})
            
    }
    console.log(props.books);
    // console.log(data)
return(
    <>
    <div>title: 
    <input type='text'  name="title"  id="title"
     value={data.title}
     onChange={setFormObject(data, setData)}/>
    </div>
    <div>desc: 
    <input type='text'  name="desc"  id="desc"
     value={data.desc}
     onChange={setFormObject(data, setData)} />
    </div>
    <div>categoryId: 
    <input type='text'  name="categoryId"  id="categoryId"
     value={data.categoryId}
     onChange={setFormObject(data, setData)} />
    </div>
    <NavLink to="/Books"><button  onClick={()=>AddBooksRedusers()}>Push</button></NavLink>
    </>
)
}




function mapStateToProps(state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(AddBooks)