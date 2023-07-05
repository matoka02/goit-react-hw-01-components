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

import { FriendList } from 'components/03-friends-list/FriendList';
import friends from './components/03-friends-list/friends.json';


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
      <FriendList friends={friends}/>     
    </App>
  </React.StrictMode>
);

console.log(4);