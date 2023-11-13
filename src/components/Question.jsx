const Question = (question) => {
  //console.log(question.question);
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Usage
  const myArray = [
    question.question.correct_answer,
    ...question.question.incorrect_answers,
  ];
  const shuffledArray = shuffle(myArray);
  return (
    <section>
      <p>{question.question.difficulty}</p>
      <p>{question.question.question}</p>
      <ul>
        {shuffledArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default Question;
