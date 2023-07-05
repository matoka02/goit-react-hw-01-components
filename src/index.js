import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import {Profile} from './components/01-network/Profile';
import user from './components/01-network/user.json';

import {Statistics} from './components/02-statistics/Statistics';
import data from './components/02-statistics/data.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics 
        title='Upload stats' 
        stats={data} />      
    </App>
  </React.StrictMode>
);