import React, { useState, useContext, useEffect } from 'react';
import MainContext from '../context/MainContext'
import axios from 'axios'
import Header from './header'
import {Link} from 'react-router-dom'

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
        { answerText: lessonQuestions[0].answers.A, isCorrect: lessonQuestions[0].correct_answer === 'A' ? true : false },
        { answerText: lessonQuestions[0].answers.B, isCorrect: lessonQuestions[0].correct_answer === 'B' ? true : false },
        { answerText: lessonQuestions[0].answers.C, isCorrect: lessonQuestions[0].correct_answer === 'C' ? true : false },
        { answerText: lessonQuestions[0].answers.D, isCorrect: lessonQuestions[0].correct_answer === 'D' ? true : false },
      ]
    },
    {
      questionText: lessonQuestions[1].question,
      answerOptions: [
        { answerText: lessonQuestions[1].answers.A, isCorrect: lessonQuestions[1].correct_answer === 'A' ? true : false },
        { answerText: lessonQuestions[1].answers.B, isCorrect: lessonQuestions[1].correct_answer === 'B' ? true : false },
        { answerText: lessonQuestions[1].answers.C, isCorrect: lessonQuestions[1].correct_answer === 'C' ? true : false },
        { answerText: lessonQuestions[1].answers.D, isCorrect: lessonQuestions[1].correct_answer === 'D' ? true : false },
      ]
    },
    {
      questionText: lessonQuestions[2].question,
      answerOptions: [
        { answerText: lessonQuestions[2].answers.A,  isCorrect: lessonQuestions[2].correct_answer === 'A' ? true : false },
        { answerText: lessonQuestions[2].answers.B, isCorrect: lessonQuestions[2].correct_answer === 'B' ? true : false },
        { answerText: lessonQuestions[2].answers.C, isCorrect: lessonQuestions[2].correct_answer === 'C' ? true : false },
        { answerText: lessonQuestions[2].answers.D, isCorrect: lessonQuestions[2].correct_answer === 'D' ? true : false },
      ],
    },
    {
      questionText: lessonQuestions[3].question,
      answerOptions: [
        { answerText: lessonQuestions[3].answers.A,  isCorrect: lessonQuestions[3].correct_answer === 'A' ? true : false },
        { answerText: lessonQuestions[3].answers.B, isCorrect: lessonQuestions[3].correct_answer === 'B' ? true : false },
        { answerText: lessonQuestions[3].answers.C, isCorrect: lessonQuestions[3].correct_answer === 'C' ? true : false },
        { answerText: lessonQuestions[3].answers.D, isCorrect: lessonQuestions[3].correct_answer === 'D' ? true : false },
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
    <div className="quiz">
      <Header />
      <br />
      {showScore ? (
        <>
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
          <br />
          <br />
          <Link to={`/course/${detailCourse._id}/lessons`}><button className="button button-blue">Go Back</button></Link>
        </>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
                <h3>Question {currentQuestion + 1}/{questions.length}</h3>
                <br />
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
