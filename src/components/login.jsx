import React from 'react';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorsEmail: [],
            errorsPassword: []
        }
    }

    handleChangeEmail(event) {
        this.setState({errorsEmail: []})
        this.setState({errorsPassword: []})
        this.setState({email: event.target.value});
      }
    handleChangePassword(event) {
        this.setState({errorsEmail: []})
        this.setState({errorsPassword: []})
        this.setState({password: event.target.value});
    }
    async login(){
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
            
          });
          if (response.ok) {
            let result = await response.json();
            if(result.status === true){
                localStorage.setItem('access_token', JSON.stringify({access_token: result.data.access_token}))
                this.props.history.push('/startGame')
            } else{
                if(result.errors === "Unauthorized"){
                    this.setState({errorsEmail: ['Unauthorized']})
                }
                if(result.errors.email !== undefined){
                    this.setState({errorsEmail: result.errors.email})
                }
                if(result.errors.password !== undefined){
                    this.setState({errorsPassword: result.errors.password})
                }
            }
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
    }
    render() {
        return (
            <div className="form-container">
                <form className='form' name="uploadForm" encType="multipart/form-data">
                    <p className='form-header'>Добро пожаловать</p>
                    <input className='form-input' type="text" value={this.state.email}  placeholder="Email" onChange={this.handleChangeEmail.bind(this)}/>
                    <input className='form-input' type="text" value={this.state.password} placeholder="Password" onChange={this.handleChangePassword.bind(this)}/>
                    <p className='form-text'>Нет аккаунта? <a href='/registration' className='form-text-hyperlink'>Зарегистрироваться</a></p>
                    <input className='form-button' type="button" value="Login" onClick={this.login.bind(this)}/>
                </form>
                {this.state.errorsEmail.map((i,index) => <p key={index} className='error-text'>{i}</p>)}
                {this.state.errorsPassword.map((i,index) => <p key={index} className='error-text'>{i}</p>)}
            </div>
        )
    }
}

export default Login