import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"


const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items:center;
  list-style-type: none;
  width: 60px;
  heigth:auto;
`;
const Label = styled.span`
  font-size: 14px;
`;
const Percentage = styled.span`
  font-size: 16px; 
`;
const Statistics = ({statsLabel,statsPercentage})=>
  (
        <Item className="item">
          <Label className="label">{statsLabel}</Label>
          <Percentage className="percentage">{statsPercentage}%</Percentage>
        </Item>
  )

Statistics.propTypes={
  statsLabel: PropTypes.string.isRequired,
  statsPercentage: PropTypes.number.isRequired, 
}

export default Statistics