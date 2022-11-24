import React, {Component} from "react";
import './Counter.css';

class Counter extends Component {
    // static defaultProps = {
    //     initialValue : 0,
    // };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    
    handleGoodIncrement = () => { this.setState(prevState =>({good: prevState.good + 1}))};
    handleNeutralIncrement = () => { this.setState(prevState =>({neutral: prevState.neutral + 1}))};
    handleBadIncrement = () => { this.setState(prevState =>({bad: prevState.bad + 1}))};
    // countTotalFeedback = () => { }


      render() {
        return (
            <section className="Feedback">
            <h1>Please leave feedback</h1>
            <div className="FeedbackOptions">
                <button className="Button" type="button" onClick={this.handleGoodIncrement}>
                    Good
                </button>
                <button className="Button" type="button" onClick={this.handleNeutralIncrement}>
                    Neutral
                </button>
                <button className="Button" type="button" onClick={this.handleBadIncrement}>
                    Bad
                </button>
            </div>
            <h1 className="StatisticsTitle">Statistics</h1>
            <div className="Statistics">
                <span className="StatisticsTotal">Good : {this.state.good}</span>
                <span className="StatisticsTotal">Neutral : {this.state.neutral}</span>
                <span className="StatisticsTotal">Bad : {this.state.bad}</span>
            </div>
            </section>
        )
      }
}

export default Counter;