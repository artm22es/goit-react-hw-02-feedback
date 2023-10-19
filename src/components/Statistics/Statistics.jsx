export const Statistics = ({ feedback, total, positive }) => {
  return total > 0 ? (
    <ul>
      {feedback.map(([key, value]) => (
        <li key={key}>
          <span>{key}: </span>
          <span>{value}</span>
        </li>
      ))}
      <li key={total}>
        <span>total: </span>
        <span>{total}</span>
      </li>
      <li key={positive}>
        <span>positive feedback: </span>
        <span>{positive}</span>
      </li>
    </ul>
  ) : (
    <p>No feedback given</p>
  );
};
