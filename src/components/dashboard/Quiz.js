import React, { useState, useEffect } from "react";
import duckImg from "../../rubber-duck-ian-malcolm.png";
import "../../styles/quiz.css";

// Quiz Functional Component
const Quiz = () => {
    const [questionsArray, setQuestionsArray] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8088/questions")
            .then(response => response.json())
            .then(questionsData => {
                const transformedQuestions = questionsData.map(({ id, quiz_id, question, options, correct_option, hint, created_at, updated_at }) => ({
                    id,
                    quiz_id,
                    question,
                    options,
                    correct_option,
                    hint,
                    created_at,
                    updated_at
                }));
                setQuestionsArray(transformedQuestions);
            });
    }, []);

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionsArray.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleAnswerSelected = (index, answer) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = answer;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleSubmitQuiz = () => {
        setShowResults(true);
    };

    const getHint = () => {
        const index = currentQuestionIndex;
        const { hint } = questionsArray[index];
        console.log("Hint: " + hint);
    };

    if (showResults) {
        const fakeAnswers = ["How To Make Lambchops", "<section>", "All of the above", "Array", "filter()", "Both object.property and object['property']", "assign", "document.getElementById('myButton').addEventListener('click', function() {});", "import Component from './Component.js';", "To update the state based on actions"]
        const scorePercentage = () => {
            let correctSelections = 0;
            fakeAnswers.forEach((selected, index) => {
                if (selected === questionsArray[index].correct_option) {
                    correctSelections += 1;
                }
            });
            return (correctSelections / questionsArray.length) * 100;
        };

        return (
            <div className="results">
                <div className="quiz-results">
                    <h2>Your Score: {scorePercentage()}%</h2>
                    <ol className="answers-list">
                        {questionsArray.map((question, index) => (
                            <li key={index}>
                                <div className="result-question-container">
                                    <strong className="result-question">{question.question}</strong>
                                    <p className="answer-label">
                                        Your answer: <span className="chosen-answer">{fakeAnswers[index]}</span>
                                    </p>
                                    <p>
                                        Correct answer: <span className="correct-answer">{question.correct_option}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-view">
            <div className="quiz-container">
                <div className="quiz-frame">
                    <div className="left-arrow">
                        <button
                            className="arrow-button"
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestionIndex === 0}
                        >
                            &larr;
                        </button>
                    </div>
                    {questionsArray.length > 0 && (
                        <div className="question-container">
                            <div className="question-control">
                                <div className="question">
                                    {questionsArray[currentQuestionIndex].question}
                                </div>
                            </div>
                            <div className="answers-container">
                                <div className="answers">
                                    {questionsArray[currentQuestionIndex].options.map((option, index) => (
                                        <div key={index} className="answer">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`answer-${currentQuestionIndex}`}
                                                    value={option}
                                                    onChange={() => handleAnswerSelected(currentQuestionIndex, option)}
                                                    checked={selectedAnswers[currentQuestionIndex] === option}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="right-arrow">
                        <button
                            className="arrow-button"
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === questionsArray.length - 1}
                        >
                            &rarr;
                        </button>
                    </div>
                    <img
                        onClick={getHint}
                        src={duckImg}
                        alt="rubber duck"
                        className="duck-img"
                    />
                    {currentQuestionIndex === questionsArray.length - 1 && (
                        <button className="submit-button" onClick={handleSubmitQuiz}>
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
