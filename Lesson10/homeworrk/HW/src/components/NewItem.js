import React, { Component, useCallback } from "react";
import { generate as id } from "shortid";
import { useState } from "react";



const  NewItem = props => {
const [value, setValue] = useState('');

const handleChange = ({ target }) => setValue(target.value );


const handleSubmit = useCallback(e => {
  e.preventDefault();
  props.addItem(value);
  setValue('');
});

return (
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-md-10">
        <input
          className="form-control mb-3"
          type="text"
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="col-md-2">
        <input className="btn btn-success" type="submit" value="Add item" />
      </div>
    </div>
  </form>
);
}





// class NewItem extends Component {
//   state = {
//     value: ""
//   };

//   handleChange = ({ target }) => this.setState({ value: target.value });

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addItem(this.state.value);
//     this.setState({ value: "" });
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="row">
//           <div className="col-md-10">
//             <input
//               className="form-control mb-3"
//               type="text"
//               onChange={this.handleChange}
//               value={value}
//             />
//           </div>
//           <div className="col-md-2">
//             <input className="btn btn-success" type="submit" value="Add item" />
//           </div>
//         </div>
//       </form>
//     );
//   }
// }

export default NewItem;
