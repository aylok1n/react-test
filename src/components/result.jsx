import React from 'react';


class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            questions: [],
            total_questions: 0,
            type_game: 0,
        }
    }

    componentDidMount(){
        this.setState({questions: JSON.parse(localStorage.getItem('result')).questions})
        this.setState({points: JSON.parse(localStorage.getItem('result')).points})
        this.setState({total_questions: JSON.parse(localStorage.getItem('result')).total_questions})
        this.setState({type_game: JSON.parse(localStorage.getItem('result')).type_game})
    }


    async play(event){

    }

    render() {
        return (
            <div className="game-container">
                aboba
                {/* <div className='game-header'>
                    <div className='game-points'>Счёт<div className='game-text-red'>{this.state.points}</div></div>
                    <div className='game-time'>Время<div className='game-text-red'>{this.state.time}</div></div>
                </div>
                <div className='game-question'>{this.state.question}</div>
                <div>{this.state.options.map((i,index) => <input className='game-option' key={index} type='button' value={i} onClick={this.play.bind(this)}/>)}</div> */}
            </div>
        )
    }
}

export default Result