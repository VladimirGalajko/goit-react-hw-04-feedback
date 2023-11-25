import { BtnUl, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnUl>
      {options.map(el => (
        <li key={el}>
          <Button type="button" name={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </Button>
        </li>
      ))}
    </BtnUl>
  );
}

export default FeedbackOptions;
