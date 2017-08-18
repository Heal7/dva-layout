import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import QuestionPage from "./routes/QuestionPage.js";
import Table from './routes/TablePage.js';
import Form from './routes/FormPage.js';
import Chart from './routes/ChartPage.js';
import Calendar from './routes/CalendarPage.js';
import Animate from './routes/AnimatePage.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={QuestionPage} />
        <Route path="table" component={Table} />
        <Route path="form" component={Form} />
        <Route path="chart" component={Chart} />
        <Route path="calendar" component={Calendar} />
        <Route path="animate" component={Animate} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
