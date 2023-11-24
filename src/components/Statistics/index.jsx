import Notification from 'components/Notification';
import { Li, Ul } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
 
  return !total ? (
    <Notification msg="There is no feedback" />
  ) : (
    <Ul>
      <Li>
        <p>
          Good: <span>{good}</span>
        </p>
      </Li>
      <Li>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </Li>
      <Li>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </Li>
      <Li>
        <p>
          Total: <span>{total}</span>
        </p>
      </Li>
      <Li>
        <p>
          Positive feedback:
          <span> {positivePercentage}%</span>
        </p>
      </Li>
    </Ul>
  )
};

export default Statistics;
