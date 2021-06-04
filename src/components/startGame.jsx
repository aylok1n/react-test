import React from 'react';

class StartGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type:1,
            type_hard: 0,
            error: ''
        }
    }

    handleChange(event) {
        this.setState({error: ''})
        this.setState({type_hard: Number(event.target.value)})
    }

    async start(){
        if(this.state.type_hard !== 0){
            let access_token = JSON.parse(localStorage.getItem('access_token')).access_token
            let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({type: this.state.type, type_hard: this.state.type_hard})
              });
              if (response.ok) {
                let result = await response.json();
                if(result.status === true){
                    result.data.type_hard = this.state.type_hard
                    localStorage.setItem('start', JSON.stringify(result.data))
                    this.props.history.push('/game')
                } else{
                    console.log( result.errors)
                }
              } else {
                alert("Ошибка HTTP: " + response.status);
              }
        } else {
            this.setState({error: "Please select hard"})
        }
    }
    render() {
        return (
            <div className="form-container">
                <form className='form' name="uploadForm" encType="multipart/form-data">
                    <select className='form-input' onChange={this.handleChange.bind(this)} value={this.state.type_hard}>
                        <option value='0' disabled='disabeled'>Выберете сложность</option>
                        <option value='1'>Easy/Легко</option>
                        <option value='2'>Hard/Тяжело</option>
                    </select>
                    <input className='form-button' type="button" value="Start" onClick={this.start.bind(this)}/>
                </form>
                <p className='error-text'>{this.state.error}</p>
            </div>
        )
    }
}

export default StartGame