import React from 'react';
import { connect } from 'dva'
import styles from '../../routes/QuestionPage.css';
import { Button, Icon } from 'antd';

function QuestionItem({dispatch, index, question}) {
  function voteUp() {
    question = {...question, voteCount: question.voteCount + 1 }
    dispatch({
      type: 'question/changeVote',
      payload: {question, index}
    })
  }

  function voteDown() {
    question = {...question, voteCount: question.voteCount - 1 }
    dispatch({
      type: 'question/changeVote',
      payload: {question, index}
    })
  }
  return (
    <div className={styles.item}>
      <div className={styles.mediaLeft}>
        <Button type="default" onClick={voteUp} style={{width:'50px', marginBottom:'10px'}}>
          <span className={styles.voteCount}><Icon type="caret-up" /></span>
          <span className={styles.voteCount}>{question.voteCount}</span>
        </Button>
        <Button type="default" icon="caret-down" onClick={voteDown} style={{width:'50px'}} />
      </div>
      <div className={styles.mediaBody}>
        <h4 className={styles.title}>{question.title}</h4>
        <p className={styles.description}>{question.description}</p>
      </div>
    </div>
  );
}

export default connect()(QuestionItem);
