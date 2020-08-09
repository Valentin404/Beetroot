import React, {Component} from 'react'
import { render } from 'react-dom';

function withForm(NewComponent) {
    class NewComponentClass extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: {...props.newComponentData}
            }
        }

     handleChange = ({ target }) =>
        this.setState({
          data: { ...this.state.data, [target.name]: target.value }
        });
    
      handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.setState({ data: this.props.newComponentData });
      };
    
    render(){
        return (
          <div>
            <NewComponent 
            {...this.props}
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            ></NewComponent>
              <input className='checkbox' type='checkbox'/>
           </div>
        )
    }
}
return NewComponentClass
}
export default withForm;