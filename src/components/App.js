import { Profile } from './profile/Profile';
import user from './profile/user.json';

import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';

import { FriendList } from './friends/FriendList';
import friends from './friends/friends.json';

import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json';

import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
