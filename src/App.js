import React from 'react';
import user from './user.json';
import User from './components/user/user';
import statisticalData from './statistical-data';
import Statistics from './components/statistics/statistics';
import FriendList from './components/friend-list/friend-list';
import friends from './friends';
import TransactionHistory from './components/transactions/transactions';
import transactions from './transactions';

function App() {
  return (
    <>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
