import React from 'react';
import './style.css'
class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
      }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    handleChangePasswordConfarmation(event) {
        this.setState({password_confirmation: event.target.value});
    }
    async registration(){
        console.log(this.state)
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
          });
        let result = await response.json();
    }
    render() {
        return (
            <div >
                <form className='form' name="uploadForm" encType="multipart/form-data">
                    <input type="text" value={this.state.name}  placeholder="Name" onChange={this.handleChangeName.bind(this)}/>
                    <input type="text" value={this.state.email}  placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/>
                    <input type="text" value={this.state.password} placeholder="Password" onChange={this.handleChangePassword.bind(this)}/>
                    <input type="text" value={this.state.password_confirmation} placeholder="Enter password" onChange={this.handleChangePasswordConfarmation.bind(this)}/>
                    <input type="button" value="Registration" onClick={this.registration.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default Registration