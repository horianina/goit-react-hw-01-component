import React from 'react'
import PropTypes from 'prop-types'
import Friends from './Friends'
import styled from "styled-components"

const List = styled.ul`
list-style-type: none;
padding:0;
`;

const FriendList = ({friends})=>(
  
<List className="friend-list">
    {friends.map(({id,avatar,name,isOnline})=>(
        <Friends key = {id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
    ))}
    </List>
)
FriendList.propTypes={
  friends: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,  
  })).isRequired
}
export default FriendList