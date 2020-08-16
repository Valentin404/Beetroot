import React from 'react'

const registrationData = {
email: '', 
password: '',
confirm_password: '',
}


class RegistrationForm extends React.Component {
state = {
    data: registrationData
}

changeData = event => {
    this.setState({ data: {
...this.state.data, [event.target.name] : event.target.value
    }})
    }
render() {
    const {data} = this.state
    // console.log(this.state.data.email)
    // console.log(this.state.data.password)
    // console.log(this.state.data.confirm_password)
    return(
        <>
        <input type='text' onChange={this.changeData} name='email'></input>
        <input type='password' onChange={this.changeData} name='password' ></input>
        <input type='password' onChange={this.changeData} name='confirm_password'></input>
        <div>
            <button>OK</button>
            <button>Cancel</button>
        </div>
        </>
    )
}
}

export default RegistrationForm;