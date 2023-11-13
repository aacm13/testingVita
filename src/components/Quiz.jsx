import { useEffect, useState } from "react";
import Question from "./Question";

const Quiz = ({ catId }) => {
  const [questions, setQuestions] = useState([]);
  const api = "https://opentdb.com/api.php";
  const easy = 9;
  const medium = 4;
  const hard = 2;
  const [activeQuestionId, setActiveQuestionId] = useState(0);
  const getQuestions = (api, difficulty, num, cat) => {
    fetch(`${api}?amount=${num}&category=${cat}&difficulty=${difficulty}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions((prevQuestions) => [...prevQuestions, ...data.results]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    const getSetOfQuestions = async () => {
      await getQuestions(api, "easy", easy, catId);
      await getQuestions(api, "medium", medium, catId);
      await getQuestions(api, "hard", hard, catId);
    };
    getSetOfQuestions();
  }, [catId]);

  return (
    <section>
      <div className="questions-balls">
        {questions.length > 10 &&
          questions.map((item, index) => {
            //console.log(item);
            return (
              <div
                key={index}
                className="question-index"
                onClick={() => setActiveQuestionId(index)}
              >
                {index}
              </div>
            );
          })}
      </div>
      {questions.length > 10 && (
        <div className="question">
          <Question question={questions[activeQuestionId]} />
        </div>
      )}
    </section>
  );
};

export default Quiz;
