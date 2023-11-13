import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";

const Test = () => {
  const [testCat, setTestCat] = useState();
  useEffect(() => {
    const cat = JSON.parse(localStorage.getItem("cat"));
    if (cat) {
      setTestCat(cat);
    }
  }, []);
  return (
    <section>
      <Quiz catId={testCat} />
    </section>
  );
};

export default Test;
