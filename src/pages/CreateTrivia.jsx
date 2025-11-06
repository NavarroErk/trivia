import React, { useState } from "react";

function CreateTrivia() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [customTriviaList, setCustomTriviaList] = useState([]);

  function clearInputFields() {
    setQuestion("");
    setAnswer("");
    setCategory("");
    setDifficulty("");
  }

  function addTriviaToList() {
    const triviaData = {
      question: question,
      answer: answer,
      category: category,
      difficulty: difficulty,
    };
    if (validateInputFields(triviaData) == false) {
      alert("All fields required.");
    } else {
      setCustomTriviaList((prevState) => [...prevState, triviaData]);
      clearInputFields();
    }
  }

  function validateInputFields(triviaDataObj) {
    let formComplete;
    for (const key in triviaDataObj) {
      if (triviaDataObj[key] == "") {
        formComplete = false;
        return formComplete;
      } else {
        formComplete = true;
      }
    }
    return formComplete;
  }

  async function addCustomTriviaToProfile() {
    const url = "http://localhost:3000/api/add-custom-trivia-to-profile";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customTriviaList),
      });
      if (!response.ok) {
        throw new Error("could not reach endpoint");
      }
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error Posting Data: ", error);
    }
  }

  return (
    <>
      <input
        type="text"
        className="input-trivia-data"
        placeholder="Enter Question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <input
        type="text"
        className="input-trivia-data"
        placeholder="Enter Answer"
        value={answer}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
      <input
        type="text"
        className="input-trivia-data"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <div>
        <div>
          <label htmlFor="input-diff-easy">Easy</label>
          <input
            type="radio"
            name="input-diff"
            className="radio-diff"
            id="input-diff-easy"
            value="easy"
            checked={difficulty === "easy"}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="input-diff-intermediate">Intermediate</label>
          <input
            type="radio"
            name="input-diff"
            className="radio-diff"
            id="input-diff-intermediate"
            value="intermediate"
            checked={difficulty === "intermediate"}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="input-diff-hard">Hard</label>
          <input
            type="radio"
            name="input-diff"
            className="radio-diff"
            id="input-diff-hard"
            value="hard"
            checked={difficulty === "hard"}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          />
        </div>
      </div>
      <button onClick={addTriviaToList}>Add To Custom Trivia</button>
      <button onClick={addCustomTriviaToProfile}>Submit</button>
      <div id="div-custom-entries">
        {customTriviaList.map((entry, key) => (
          <div key={key} className="div-entry">
            <p>
              <b>Question:</b> {entry.question} <b>Answer:</b> {entry.answer}{" "}
            </p>
            <p>
              <b>Category:</b>
              {entry.category} <b>Difficulty:</b> {entry.difficulty}
            </p>
          </div>
        ))}
      </div>
      <style></style>
    </>
  );
}

export default CreateTrivia;
