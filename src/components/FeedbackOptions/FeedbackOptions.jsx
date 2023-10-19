export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button onClick={() => onLeaveFeedback(option)} type="button">
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
