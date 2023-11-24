import FeedbackOptions from 'components/FeedbackOptions';
import Section from './components/Section';
import Statistics from 'components/Statistics';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './components/Container/index.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = el => {
    this.setState(prevState => ({ [el]: prevState[el] + 1 }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good }) => {
    return good > 0
      ? Math.round((good * 100) / this.countTotalFeedback(this.state))
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
