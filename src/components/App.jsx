import React from 'react';


import { Profile } from "./01-network/Profile";
import user from '../components/01-network/user.json';

import { Statistics } from "./02-statistics/Statistics";
import data from '../components/02-statistics/data.json';

import { FriendList } from "./03-friends-list/FriendList";
import friends from '../components/03-friends-list/friends.json';

import { TransactionHistory } from "./04-transaction-history/TransactionHistory";
import transactions from '../components/04-transaction-history/transactions.json';

export const App = ({children}) => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
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
      <TransactionHistory items={transactions} />   
      {children}
    </div>
  );
};

export default App