import React, { Component, createContext, useState, useReducer } from "react";
import { generate as id } from "shortid";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";

export const AppContext = createContext();





// function App2 (props) {
//   const ITEMS = 'ITEMS' 
//   const DELETEITEM = 'DELETEITEM';
//   const TOGGLEITEM = 'TOGGLEITEM';

//   function reducer(state, action) {
//     switch (action.type) {
//       case ITEMS:
//         return {defaultState}
//       case DELETEITEM:
//         return {deleteItem}
//       case TOGGLEITEM:
//         return {toggleItem}
//     }
//   }
//   const addItem = value => {
//        setItems(({ items }) => ({
//           items: [{ id: id(), value, packed: false }, ...items]
//         }))}; 
        
//        const toggleItem = id =>
//         setToggleItems(({ items }) => ({
//           items: items.map(item =>
//             item.id === id ? { ...item, packed: !item.packed } : item
//           )
//         }));
//         const markAllActive = () =>
//         setItems(({ items }) => ({
//           items: items.map(item =>
//             item.packed ? { ...item, packed: false } : item
//           )
//         }));
//        const  deleteItem = id =>
//     setDeleteItems(({ items }) => ({
//           items: items.filter(item => item.id !== id)
//         }));
    
//     const Counter = () => {
//       const [state, dispatch] = useReducer(reducer, ITEMS);
//       const deleteItem = () => dispatch({type: DELETEITEM}) 
//       const toggleItem = () => dispatch({type: TOGGLEITEM})

//     }
    
    
//     //     const packedItems = items.filter(item => item.packed);
//     //     const unPackedItems = items.filter(item => !item.packed);
    
// }




function App() {

const [items, setItem] = useState(defaultState);

 const addItem = value => {
   setItem( (
       [{ id: id(), value, packed: false }, ...items]
    ))}; 
    
   const toggleItem = id =>
   setItem((
    items.map(item => item.id === id ? { ...item, packed: !item.packed } : item
      )
    ));
    const markAllActive = () =>
    setItem((
      items.map(item =>
        item.packed ? { ...item, packed: false } : item
      )
    ));
   const  deleteItem = id => setItem(items.filter(item => item.id !== id))

    console.log(items)
  const packedItems = items.filter(item => item.packed);
  const unPackedItems = items.filter(item => !item.packed);
 
    return (
      <AppContext.Provider value={{
        items: defaultState,
        toggleItem,
        deleteItem,
      }}
      > 
        <div className="container py-3">
          <NewItem addItem={addItem} />
          <div className="row">
            <div className="col-md-5">
              <ListItems  title="Unpacked Users" items={unPackedItems} />
              <button
                onClick={markAllActive}
                className="btn btn-success btn-lg btn-block"
              >
                Complete all todos
              </button>
            </div>
            <div className="offset-md-2 col-md-5">
              <ListItems title="Packed Users" items={packedItems} />
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );

}


// class App extends Component {
//   addItem = value =>
//     this.setState(({ items }) => ({
//       items: [{ id: id(), value, packed: false }, ...items]
//     }));

//   toggleItem = id =>
//     this.setState(({ items }) => ({
//       items: items.map(item =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     }));

//   deleteItem = id =>
//     this.setState(({ items }) => ({
//       items: items.filter(item => item.id !== id)
//     }));

//     markAllActive = () =>
//     this.setState(({ items }) => ({
//       items: items.map(item =>
//         item.packed ? { ...item, packed: false } : item
//       )
//     }));


//   state = {
//     items: defaultState,
//     deleteItem: this.deleteItem,
//     toggleItem: this.toggleItem
//   };
//   render() {
//     const { items } = this.state;
//     const packedItems = items.filter(item => item.packed);
//     const unPackedItems = items.filter(item => !item.packed);

//     return (
//       <AppContext.Provider value={this.state}>
//         <div className="container py-3">
//           <NewItem addItem={this.addItem} />
//           <div className="row">
//             <div className="col-md-5">
//               <ListItems title="Unpacked Users" items={unPackedItems} />
//               <button
//                 onClick={this.markAllActive}
//                 className="btn btn-success btn-lg btn-block"
//               >
//                 Complete all todos
//               </button>
//             </div>
//             <div className="offset-md-2 col-md-5">
//               <ListItems title="Packed Users" items={packedItems} />
//             </div>
//           </div>
//         </div>
//       </AppContext.Provider>
//     );
//   }
// }

export default App;
