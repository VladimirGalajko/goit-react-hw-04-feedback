import FeedbackOptions from 'components/FeedbackOptions';
import Section from './components/Section';
import Statistics from 'components/Statistics';
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './components/Container/index.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = el => {  
    if (el === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (el === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (el === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = ({good, neutral, bad}) => good + neutral + bad;

  const countPositiveFeedbackPercentage = ([good, neutral, bad]) => {   
    return good > 0
      ? Math.round((good * 100) / countTotalFeedback({good, neutral, bad}))
      : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClickButton}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback({good, neutral, bad})}
          positivePercentage={countPositiveFeedbackPercentage([
            good,
            neutral,
            bad,
          ])}
        />
      </Section>
      <GlobalStyle />
    </Container>
  );
};

export default App;
