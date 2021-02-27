import React from 'react'
import Statistics from './Statistics'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ItemId = styled.ul`
  list-style-type: none;
  padding:0;
  display: flex;
  `;
const Statistic = styled.section`
  width:300px;
  heigth:200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const Title = styled.h2`
  color: #959da5;
  font-size: 18px;
  line-height: 1.5;
  text-transform:uppercase;
  `;
const StatisticsList = ({statisticalData})=>(
  <>
  <Statistic className="statistics">
    <Title className="title">Upload stats</Title>
      <ItemId>
        {statisticalData.map((item)=>(
            <Statistics key = {item.id}
            stats={item.statisticalData}
            statsLabel={item.label}
            statsPercentage={item.percentage}
          />  
        ))}
        </ItemId>
    </Statistic>
  </>
)
StatisticsList.propTypes={
  statisticalData: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired, 
  })).isRequired
}
  export default StatisticsList