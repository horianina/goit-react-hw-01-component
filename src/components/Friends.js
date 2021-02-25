import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"


const Item = styled.li`
  width: 200px;
  display:flex;
  align-items:center;
  padding-left: 20px;
  margin: 0 auto;
  margin-bottom:10px;
  border: 1px #959da5 solid;
`;

const Status = styled.span`
  width:10px;
  height:10px;
  border-radius: 50%;
  background:${props =>props.isOnline ? "green" : "red"};
  margin-rigth:20px;
`;

const Image = styled.img`
  margin-left:20px;
  border-radius: 10px;
`;

const Name = styled.p`
  color: #1b1f23;;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  margin-left:20px;
`;

const Friends = ({avatar,name,isOnline})=>{
  return(
    <Item class="item">
      <Status isOnline={isOnline}  class="status">{isOnline}</Status>
      <Image class="avatar" src={avatar} alt={name} width="48" />
      <Name class="name">{name}</Name>
    </Item>
  )
}
Friends.propTypes={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
}

export default Friends