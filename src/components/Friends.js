import React from 'react'
import PropTypes from 'prop-types'


const Friends = ({avatar,name,isOnline})=>{
  return(
    
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>

  )
}
Friends.propTypes={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  
}

export default Friends