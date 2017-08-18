import React from 'react';
import QuestionItem from './QuestionItem';

function QuestionList({questions, sortQuestion}) {

  if (questions && questions.length > 0) {
    questions = sortQuestion(questions);
  }
  return (
    <div>
      {
        questions.map((q, index) => {
          return (
            <QuestionItem
                key={q.id} 
                index={index}
                question={q} 
            />
          )
        })
      }
    </div>
  );
}

export default QuestionList;
