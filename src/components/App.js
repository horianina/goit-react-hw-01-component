import React from 'react'
import user from '../user.json'
import Profile from './Profile'
import statisticalData from '../statistical-data.json';
import StatisticsList from './StatisticsList'
import friends from '../friends.json'
import FriendList from './FriendList'
import Friends from './Friends'
import TransactionHistory from './TransactionHistory'
import transactions from '../transactions.json'
import Transactions from './Transactions'



const App=()=>{
  return(
    <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  statsFollowers={user.stats.followers}
  statsViews={user.stats.views}
  statsLikes={user.stats.likes}
    />


//  <StatisticsList 
//  title="Upload stats" stats={statisticalData}  
//  StatisticsList statisticalData={statisticalData} /> 


//<FriendList friends={friends} />

//<TransactionHistory transactions={transactions} />
  )
}
export default App