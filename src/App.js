import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function QuizApp() {
    
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                {answerText: 'New York', isCorrect: false},
                {answerText: 'London', isCorrect: false},
                {answerText: 'Paris', isCorrect: true},
                {answerText: 'Dublin', isCorrect: false},
            ],
        },

        {
            questionText: 'Who is the CEO of Tesla?',
            answerOptions: [
                {answerText: 'Jeff Bezos', isCorrect: false},
                {answerText: 'Elon Musk', isCorrect: true},
                {answerText: 'Bill Gates', isCorrect: false},
                {answerText: 'Tony Stark', isCorrect: false},
            ],
        },

        {
            questionText: 'The iphone was created by which company?',
            answerOptions: [
                {answerText: 'Apple', isCorrect: true},
                {answerText: 'Intel', isCorrect: false},
                {answerText: 'Amazon', isCorrect: false},
                {answerText: 'Microsoft', isCorrect: false},
            ],
        },

        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                {answerText: '1', isCorrect: false},
                {answerText: '4', isCorrect: false},
                {answerText: '6', isCorrect: false},
                {answerText: '7', isCorrect: true},
            ],
        },

        {
            questionText: 'Which country is like heaven on earth?',
            answerOptions: [
                {answerText: 'India', isCorrect: false},
                {answerText: 'USA', isCorrect: false},
                {answerText: 'Maldives', isCorrect: true},
                {answerText: 'Canada', isCorrect: false},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
            alert("this answer is correct!");
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
            alert("You have reached the end of the quiz!");
        }
    }

  return (
    <div className='app'>
    {showScore ? 
        <div className='score-section'>
            You scored {score} out of {questions.length} <br />
            { score === questions.length ? <h3>Congratulations!!!</h3> : null } 
        </div> : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>
                        {questions[currentQuestion].questionText}
                    </div>
                </div>
                <div className='answer-section'>
                    {
                        questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                            {answerOption.answerText}
                        </button>))
                    }
                </div>
            </>
        )}
    </div>
  );
}

export default QuizApp;
