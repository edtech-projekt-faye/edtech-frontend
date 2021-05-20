import React, { useState, useContext, useEffect } from 'react';
import MainContext from '../context/MainContext'
import axios from 'axios'

const LessonTests = (props) => {
  const [tests, setTests] = useState([])
  const { lesson, setLesson, detailCourse, setDetailCourse } = useContext(MainContext)
  const { match } = props

  useEffect(() => {
    axios.get(`https://dry-fortress-33352.herokuapp.com/course/${match.params.id}`)
      .then(item => {
        // console.log(item.data.course_lessons);
        setLesson(item.data.course_lessons.filter(lesson => lesson.lesson_number === match.params.number))
        // setDetailCourse(item.data)
        // console.log(lessonItem.lesson_number);
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id])
  // useEffect(() => {
  //   const settetTestItem = lesson.filter(item => item.lesson_number === '1')
  //   setTests(settetTestItem.lesson_tests)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  const lessonQuestions = lesson[0].lesson_tests[0].test_questions
  console.log(lessonQuestions);
  console.log(lessonQuestions[0].answers);
  // console.log(tests);
  const questions = [
    {
      questionText: lessonQuestions[0].question,
      answerOptions: [
        { answerText: lessonQuestions[0].answers.A, isCorrect: `${lessonQuestions[0].question.correct_answer === 'A' ? true : false}` },
        { answerText: lessonQuestions[0].answers.B, isCorrect: `${lessonQuestions[0].question.correct_answer === 'B' ? true : false}` },
        { answerText: lessonQuestions[0].answers.C, isCorrect: `${lessonQuestions[0].question.correct_answer === 'C' ? true : false}` },
        { answerText: lessonQuestions[0].answers.D, isCorrect: `${lessonQuestions[0].question.correct_answer === 'D' ? true : false}` },
      ]
    },
    {
      questionText: lessonQuestions[1].question,
      answerOptions: [
        { answerText: lessonQuestions[1].answers.A, isCorrect: `${lessonQuestions[1].question.correct_answer === 'A' ? true : false}` },
        { answerText: lessonQuestions[1].answers.B, isCorrect: `${lessonQuestions[1].question.correct_answer === 'B' ? true : false}` },
        { answerText: lessonQuestions[1].answers.C, isCorrect: `${lessonQuestions[1].question.correct_answer === 'C' ? true : false}` },
        { answerText: lessonQuestions[1].answers.D, isCorrect: `${lessonQuestions[1].question.correct_answer === 'D' ? true : false}` },
      ]
    },
    {
      questionText: 'What are variables used for in JavaScript?',
      answerOptions: [
        { answerText: 'For storing or holding data.', isCorrect: true },
        { answerText: 'For changing language settings.', isCorrect: false },
        { answerText: 'For storing or holding data.', isCorrect: false },
        { answerText: 'For changing a value’s data type.', isCorrect: false },
      ],
    },
    {
      questionText: 'What is string concatenation?',
      answerOptions: [
        { answerText: 'When you change a variable’s value.', isCorrect: false },
        { answerText: 'When you assign a string to a variable.', isCorrect: false },
        { answerText: 'When you print a string to the console.', isCorrect: false },
        { answerText: 'When you join strings together.', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, key) => (
              <button key={key} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );

}

export default LessonTests;
