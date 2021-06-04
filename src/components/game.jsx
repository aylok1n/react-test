import React from 'react';


class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            points: 0,
            question: '',
            time:0 ,
            type_hard: 0,
            type: 2
        }
    }

    componentDidMount(){
        this.setState({options: JSON.parse(localStorage.getItem('start')).options})
        this.setState({points: JSON.parse(localStorage.getItem('start')).points})
        this.setState({question: JSON.parse(localStorage.getItem('start')).question})
        this.setState({time: JSON.parse(localStorage.getItem('start')).time})
        this.setState({type_hard: JSON.parse(localStorage.getItem('start')).type_hard})
        this.startTimer()
    }

    startTimer(){
        let time = setInterval(() => {
            this.setState({time: this.state.time -= 1})
            if(this.state.time == 0){
                clearInterval(time)
                alert('time out')
            }
        }, 1000)
        
        return time
    }

    async play(event){
        let access_token = JSON.parse(localStorage.getItem('access_token')).access_token
        let answer = Number(event.target.value)
        let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({answer: answer, type_hard: this.state.type_hard, type: this.state.type})
          });
          if (response.ok) {
            let result = await response.json();
            if(result.status === true){
                if(result.data.question !== undefined){
                    console.log(result.data)
                    this.setState({options: result.data.options})
                    this.setState({points: result.data.points})
                    this.setState({question: result.data.question})
                    this.setState({time: result.data.time})
                } else {
                    localStorage.setItem('result', JSON.stringify(result.data))
                    console.log(result.data)
                    this.props.history.push('/result')
                }
                
            } else{
                console.log(result.errors)
            }
          } else {
            alert("Ошибка HTTP: " + response.status);
          }
    }

    render() {
        return (
            <div className="game-container">
                <div className='game-header'>
                    <div className='game-points'>Счёт<div className='game-text-red'>{this.state.points}</div></div>
                    <div className='game-time'>Время<div className='game-text-red'>{this.state.time}</div></div>
                </div>
                <div className='game-question'>{this.state.question}</div>
                <div>{this.state.options.map((i,index) => <input className='game-option' key={index} type='button' value={i} onClick={this.play.bind(this)}/>)}</div>
                {}
            </div>
        )
    }
}

export default Game