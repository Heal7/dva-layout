import React from 'react';
import { connect } from 'dva';
import styles from './QuestionPage.css';
import ShowAddButton from '../components/question/ShowAddButton';
import QuestionForm from '../components/question/QuestionForm';
import QuestionList from '../components/question/QuestionList';

function IndexPage({ dispatch, questions, formIsShow }) {
  function handleToggleForm() {
    dispatch({
      type: 'question/toggleForm'
    })
  }
  
  function sortQuestion(questions) {
    questions.sort((a, b) => {
      return b.voteCount - a.voteCount;
    })
    return questions;
  }

  function handleAddQuestion(newQuestion) {
    newQuestion.id = questions.length + 1;
    newQuestion.voteCount = 0;
    dispatch({
      type: 'question/addQuestion',
      payload: newQuestion
    })
  }

  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <h1 style={{fontSize: '34px'}}>React 问答</h1>
        <ShowAddButton onToggleForm={handleToggleForm} />
      </div>
      <div className={styles.container}>
        <QuestionForm 
            onAddQuestion={handleAddQuestion}
            formIsShow={formIsShow}
            onToggleForm={handleToggleForm}
        />
        <QuestionList 
            questions={questions} 
            sortQuestion={sortQuestion} 
        />
      </div>
    </div>
  );
}

function mapStateToProps({question}) {
  return {...question}
}

export default connect(mapStateToProps)(IndexPage);
