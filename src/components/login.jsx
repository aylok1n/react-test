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
        console.log(JSON.stringify(this.state))
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
          });
          if (response.ok) {
            let result = await response.json();
            if(result.status === true){
                console.log(result.data.access_token)
                localStorage.setItem('Users', JSON.stringify({email: this.state.email, access_token: result.data.access_token}))
            } else{
                console.log(result.errors)
            }
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
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