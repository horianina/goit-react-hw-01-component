import React from 'react'
import PropTypes from 'prop-types'
import Friends from './Friends'


const FriendList = ({friends})=>(
  <ul class="friend-list">


    {friends.map((friendListItem)=>(
      <li key = {friendListItem.id}>
        {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
        <Friends 
        avatar={friendListItem.avatar}
        name={friendListItem.name}
        isOnline={friendListItem.isOnline}

      />
      </li>
    ))}
  </ul>
)
FriendList.propTypes={
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    
  })).isRequired
}
export default FriendList