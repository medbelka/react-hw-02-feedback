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
        totalFeedback: 0,
        feedbackPositivePercentage: 0,
      }
    
    handleGoodIncrement = () => { this.setState(prevState =>({good: prevState.good + 1}))};
    handleNeutralIncrement = () => { this.setState(prevState =>({neutral: prevState.neutral + 1}))};
    handleBadIncrement = () => { this.setState(prevState =>({bad: prevState.bad + 1}))};
    countTotalFeedback = () => { this.setState(prevState =>({totalFeedback: prevState.totalFeedback + 1})) };
    // function countPositiveFeedbackPercentage(good, totalFeedback) { const per = ((this.state.good)/this.state.totalFeedback)*100
    //  return per
    // };

      render() {
        return (
            <section className="Feedback">
            <h1>Please leave feedback</h1>
            <div className="FeedbackOptions" onClick={this.countTotalFeedback}>
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
                <span className="StatisticsTotal">Total: {this.state.totalFeedback}</span>
                {/* <span className="StatisticsTotal">Positive feedback: {this.state.feedbackPositivePercentage}%</span> */}
            </div>
            </section>
        )
      }
}

export default Counter;