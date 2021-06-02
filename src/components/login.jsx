import React from 'react';
import './style.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.login = this.login.bind(this)
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
                    <input type="text"  placeholder="Email" onChange={this.handleChangeEmail}/>
                    <input type="text"  placeholder="Password" onChange={this.handleChangePassword}/>
                    <input type="button" value="Login" onClick={this.login}/>
                </form>
            </div>
        )
    }
}

export default Login