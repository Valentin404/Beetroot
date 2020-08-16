import React from 'react'


const loginData = {
    email: '', 
    password: '',
}
class LoginForm extends React.Component {
    state = {
        data: loginData
    }
    changeData = event => {
        this.setState({data:{
            ...this.state.data, [event.target.name] : event.target.value
        }})
    }
    render() {
        console.log(this.state.data.email)
        console.log(this.state.data.password)
        return(
            <>
            <input onChange={this.changeData} name='email'></input>
            <input onChange={this.changeData} name='password'></input>
            <div>
                <button>OK</button>
                <button>Cancel</button>
            </div>
            </>
        )
    }
}

export default LoginForm