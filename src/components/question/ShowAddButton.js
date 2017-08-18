import React from 'react';
import styles from '../../routes/QuestionPage.css';

function ShowAddButton({onToggleForm}) {
  return (
    <button className={styles.button} onClick={onToggleForm}>添加问题</button>
  );
}

export default ShowAddButton;
