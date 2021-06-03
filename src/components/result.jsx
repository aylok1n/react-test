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
            <div className="result-container">
                <div className='result-text'>Score: <div className="result-text-symbol"> {this.state.points}</div></div>
                <div className='result-text'>Total questions: <div className="result-text-symbol"> {this.state.total_questions}</div></div>
                <div className='result-text-endGame'>End game</div>
                
                <div className='result-questions-container'>
                    <div className="result-question-header">
                            <div className="result-header-item">question</div>
                            <div className="result-header-item">current answer</div>
                            <div className="result-header-item">answer</div>
                    </div>
                    {this.state.questions.map((i,index) => 
                        <div className='result-question' key={index}>
                            <div className="result-question-item">{i.question}</div>
                            <div className="result-question-item">{i.current_answer}</div>
                            <div className="result-question-item">{i.answer}</div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default Result