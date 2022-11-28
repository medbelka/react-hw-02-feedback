import React, {Component} from 'react';

import Section from './Section/';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

const options = [
  { name: "good", label: "Good", type: "button"},
  { name: "neutral", label: "Neutral", type: "button"},
  { name: "bad", label: "Bad", type: "button"}
]

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
      totalFeedback: 0,
      feedbackPositivePercentage: 0,
    }

    handleLeaveFeedback = (nameBtn) =>{
      this.setState(prevState =>({[nameBtn]: prevState[nameBtn] + 1}))
      this.setState(prevState =>({totalFeedback: prevState.totalFeedback + 1})) 
      this.setState(prevState =>
          ({feedbackPositivePercentage: Math.round(((prevState.good)/prevState.totalFeedback)*100)}))
    }

  render() {
    return (
      <Section title="Please leave feedback" >
        <FeedbackOptions 
          onLeaveFeedback={this.handleLeaveFeedback}
          options={options}
          />
        <Statistics 
          good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad} 
          total={this.state.totalFeedback} 
          positivePercentage={this.state.feedbackPositivePercentage}
          />
      </Section>
      );
    };
  }

export default App;