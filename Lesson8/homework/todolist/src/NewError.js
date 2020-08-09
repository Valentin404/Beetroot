import React from 'react'
function NewError() {
    const handleClick = () => {
        throw new Error('I crashed!');
    }

    return(
        <div>
        <br />
 <button onClick={handleClick}>
    Click to throw error
  </button>
  </div>
    )
}


// class NewError  extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { counter: 0 };
//       this.handleClick = this.handleClick.bind(this);
//     }
    
//     handleClick() {
//       this.setState(({counter}) => ({
//         counter: counter + 1
//       }));
//     }
    
//     render() {
//       if (this.state.counter === 2) {
//         // Simulate a JS error
//         throw new Error('I crashed!');
//       }
//       return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//     }
//   }
  export default NewError