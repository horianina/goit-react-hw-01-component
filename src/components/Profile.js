import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"


  
const ProfileWrapper = styled.div`
width:200px;
heigth: 500px;
margin:50px auto;

`;
const Description = styled.div`
display:flex;
flex-direction:column;
`;
const Image = styled.img`
width: 100px;
heigth:100px;
border-radius:50px;
margin:0 auto;
padding-bottom:20px;

`;
const Stats = styled.ul`
display: flex;
padding:0;
justify-content: center;
background-color: #e1e4e8;


`;
const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items:center;
list-style-type: none;
width: 60px;
heigth:60px;
`;
const Label = styled.span`
font-size: 14px;
line-height: 1.5;
color: #959da5;
`;
const Quantity = styled.span`
font-size: 16px;
line-height: 1.5;
color: #1b1f23;
font-weight: bold;

`;

const Name = styled.p`
font-size: 18px;
font-weight: bold;
margin:0 auto;
padding-bottom:5px;

`;
const Tag = styled.p`
font-size: 14px;
line-height: 1.5;
color: #959da5;
margin:0 auto;
padding-bottom:5px;
`;
const Location = styled.p`
font-size: 16px;
line-height: 1.5;
color: #959da5;
margin:0 auto;
`;

const Profile = ({avatar,name,tag,location,statsFollowers,statsViews,statsLikes})=>{
  return(
    <ProfileWrapper class="profile">
      <Description class="description">
        <Image
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
        />
        <Name class="name">{name}</Name>
        <Tag class="tag">@{tag}</Tag>
        <Location class="location">{location}</Location>
      </Description>

      <Stats class="stats">
        <StatsItem>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{statsFollowers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{statsViews}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{statsLikes}</Quantity>
        </StatsItem>
      </Stats>
</ProfileWrapper>
  
  )
}
Profile.propTypes={
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired
}

export default Profile