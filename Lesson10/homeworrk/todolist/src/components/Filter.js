import React from "react";


const Filter = props => {
  const { searchTerm, onChange } = props;
  return(
    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      value={searchTerm}
      onChange={onChange}
    />
  </div>
  )
}

// class Filter extends Component {
//   render() {
//     const { searchTerm, onChange } = this.props;
//     return (
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           value={searchTerm}
//           onChange={onChange}
//         />
//       </div>
//     );
//   }
// }

export default Filter;
