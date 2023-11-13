import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesComp = () => {
  const [categories, setCategories] = useState();
  const apiCat = "https://opentdb.com/api_category.php";
  const getCategories = () => {
    fetch(apiCat)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.trivia_categories);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section className="cat-container">
      {categories &&
        categories.map((cat, index) => (
          <Link to={"/test"} key={index}>
            <div
              className="category"
              value={cat.id}
              onClick={() => {
                localStorage.setItem("cat", JSON.stringify(cat.id));
              }}
            >
              {cat.name}
            </div>
          </Link>
        ))}
    </section>
  );
};

export default CategoriesComp;
