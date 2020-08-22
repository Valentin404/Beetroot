import React from 'react'
// import 

function AdminRoute (Comonent) {
    return class extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
             data: {...props.newComponentData}
         }
     }
    //  roleUser = () => {
    //    if(this.props.user.role === 'admin') {
    //      console.log(this.props)
    //    }
    //    console.log(this.props)
    //  }
    //  this.props.user.role === 'admin' ?
    render(){
      let localRule  =localStorage.getItem('user')
      let regExp = /{"name":"[\w, \W,\d]+","status":"([\w, \W,\d]+)"(})/g;
      let finish = localRule.replace(regExp, '$1')
   if (finish == "admin") {
     
   }
      console.log(finish)

      // localStorage.getItem(user)
        return (
          finish == "admin" ? (
            <Comonent 
            {...this.props}
            {...this.state}
            ></Comonent>
          ): (
            <Comonent
            path="/films"
            {...this.props}
            {...this.state}
            />
          )
           
        )
    }
    }
}
export default AdminRoute


// import { render } from 'react-dom';

// function withForm(NewComponent) {
//     class NewComponentClass extends React.Component {
//         constructor(props) {
//             super(props)
//             this.state = {
//                 data: {...props.newComponentData}
//             }
//         }

//      handleChange = ({ target }) =>
//         this.setState({
//           data: { ...this.state.data, [target.name]: target.value }
//         });
    
//       handleSubmit = e => {
//         e.preventDefault();
//         // console.log(this.state);
//         this.setState({ data: this.props.newComponentData });
//       };
    
//     render(){
//         return (
//           <div>
//             <NewComponent 
//             {...this.props}
//             {...this.state}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//             >lolol</NewComponent>
//               <input className='checkbox' type='checkbox'/>
              
//            </div>
//         )
//     }
// }
// return NewComponentClass
// }
// export default withForm;