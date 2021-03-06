import React, {  useState } from "react";
import Item from "./Item";
import Filter from "./Filter";



function ListItems(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const updateFilter = ({ target }) => {
    setSearchTerm(target.value );
  };
  // get?
const getBody =() => {
    const { title, items } = props;
    let out = [...items];
    if (searchTerm) {
      out = out.filter(item =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return out.map(item => <Item title={title} item={item} key={item.id} />);
  }

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={searchTerm} onChange={updateFilter} />
      <ul className="mb-3 p-0">{getBody()}</ul>
    </section>
  );
}

// class ListItems extends Component {
//   state = {
//     searchTerm: ""
//   };

//   updateFilter = ({ target }) => {
//     this.setState({ searchTerm: target.value });
//   };

//   get getBody() {
//     const { searchTerm } = this.state;
//     const { title, items } = this.props;
//     let out = [...items];
//     if (searchTerm) {
//       out = out.filter(item =>
//         item.value.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     return out.map(item => <Item title={title} item={item} key={item.id} />);
//   }

//   render() {
//     const { searchTerm } = this.state;
//     return (
//       <section>
//         <h3 className="mb-3">Title</h3>
//         <Filter filter={searchTerm} onChange={this.updateFilter} />

//         <ul className="mb-3 p-0">{this.getBody}</ul>
//       </section>
//     );
//   }
// }

export default ListItems;
