import React, {Component} from "react";
import './Counter.css';

class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        totalFeedback: 0,
        feedbackPositivePercentage: 0,
        }
    
    handleClick = (event) =>{
        const currentBtn = event.currentTarget.name;
        this.setState(prevState =>({[currentBtn]: prevState[currentBtn] + 1}))
        this.setState(prevState =>({totalFeedback: prevState.totalFeedback + 1})) 
        this.setState(prevState =>
            ({feedbackPositivePercentage: Math.round(((prevState.good)/prevState.totalFeedback)*100)}))
        }

      render() {
        return (
            <section className="Feedback">
            <h1>Please leave feedback</h1>
            <div className="FeedbackOptions">
                <button className="Button" type="button" name="good" onClick={this.handleClick}>
                    Good
                </button>
                <button className="Button" type="button" name="neutral" onClick={this.handleClick}>
                    Neutral
                </button>
                <button className="Button" type="button" name="bad" onClick={this.handleClick}>
                    Bad
                </button>
            </div>
            <h1 className="StatisticsTitle">Statistics</h1>
            <div className="Statistics">
                <span className="StatisticsTotal">Good : {this.state.good}</span>
                <span className="StatisticsTotal">Neutral : {this.state.neutral}</span>
                <span className="StatisticsTotal">Bad : {this.state.bad}</span>
                <span className="StatisticsTotal">Total: {this.state.totalFeedback}</span>
                <span className="StatisticsTotal">Positive feedback: {this.state.feedbackPositivePercentage}%</span>
            </div>
            </section>
        )
      }
    }

export default Counter;