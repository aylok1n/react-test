import React from 'react';
import './style.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    async login(){
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(JSON.stringify(this.state))
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
          });
        let result = await response.json();
        console.log(result)
    }
    render() {
        return (
            <div >
                <form className='form' name="uploadForm" encType="multipart/form-data">
                    <input type="text" value={this.state.email}  placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/>
                    <input type="text" value={this.state.password} placeholder="Password" onChange={this.handleChangePassword.bind(this)}/>
                    <input type="button" value="Login" onClick={this.login.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default Login