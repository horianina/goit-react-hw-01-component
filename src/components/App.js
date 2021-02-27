import React from 'react'
import user from '../data/user.json'
import Profile from './Profile'
import statisticalData from '../../src/data/statistical-data.json';
import StatisticsList from './StatisticsList'
import friends from '../data/friends.json'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'
import transactions from '../data/transactions.json'


const App=()=>{
  
  return(
    <>
    <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  statsFollowers={user.stats.followers}
  statsViews={user.stats.views}
  statsLikes={user.stats.likes}/>
    
  <StatisticsList 
  title="Upload stats" stats={statisticalData}  
  StatisticsList statisticalData={statisticalData} />

<TransactionHistory transactions={transactions} />

<FriendList friends={friends} />


</>
  )
}
  

export default App