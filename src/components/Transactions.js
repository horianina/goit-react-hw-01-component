import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

const Tr = styled.tr`



`;

const Td = styled.td`
text-align: center;
text-transform: capitalize;
border-left: 1px solid black;
border-bottom: 1px solid black;


`;
const Transactions = ({type,amount,currency})=>{
  return( 
      <Tr>
        <Td>{type}</Td>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </Tr>
  )
}
Transactions.propTypes={
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  
}

export default Transactions