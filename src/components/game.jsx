import React from 'react';


class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            points: 0,
            question: '',
            time:0 
        }
    }

    componentDidMount(){
        this.setState({options: JSON.parse(localStorage.getItem('start')).options})
        this.setState({points: JSON.parse(localStorage.getItem('start')).points})
        this.setState({question: JSON.parse(localStorage.getItem('start')).question})
        this.setState({time: JSON.parse(localStorage.getItem('start')).time})
        console.log(JSON.parse(localStorage.getItem('start'))) 
    }

    play(){

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
            </div>
        )
    }
}

export default Game