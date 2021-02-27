import React from 'react'
import PropTypes from 'prop-types'
import Transactions from './Transactions'
import styled from 'styled-components'

const Table = styled.table`
border: 1px #959da5 solid;
width: 600px;
height: 800px;
`;

const Th = styled.th`
text-transform: uppercase;
border-left: 1px solid black;
border-bottom: 1px solid black;
`;

const TransactionHistory = ({transactions})=>(
  
    <Table className="transaction-history">
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>  
        {transactions.map((items)=>(
                <Transactions key = {items.id}
                type={items.type}
                amount={items.amount}
                currency={items.currency}
                />
        ))}
      </tbody>
  </Table>
  
)
TransactionHistory.propTypes={
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,  
  })).isRequired
}
export default TransactionHistory