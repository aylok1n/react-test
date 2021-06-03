import React from 'react';

class StartGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type:1,
            type_hard: 0
        }
    }

    handleChange(event) {
        this.setState({type_hard: Number(event.target.value)})
    }

    async start(){
        let access_token = JSON.parse(localStorage.getItem('access_token')).access_token
        console.log(this.state)
        let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
          });
          if (response.ok) {
            let result = await response.json();
            if(result.status === true){
                // console.log(result.data)
                result.data.type_hard = this.state.type_hard
                localStorage.setItem('start', JSON.stringify(result.data))
                this.props.history.push('/Game')
            } else{
                console.log( result.errors)
            }
          } else {
            alert("Ошибка HTTP: " + response.status);
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
            </div>
        )
    }
}

export default StartGame