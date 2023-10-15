function Options({ options, dispatch, answer, question }) {
  const hasBeenAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasBeenAnswered &&
            (index === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          disabled={hasBeenAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
