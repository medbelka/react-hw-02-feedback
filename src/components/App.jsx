import React, {Component} from 'react';

import Section from './Section/'
import { Statistics } from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/';

class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions 
          onLeaveFeedback={this.handleClick}
          options={this.state}
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