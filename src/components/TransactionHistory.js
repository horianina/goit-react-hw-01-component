import React from 'react'
import PropTypes from 'prop-types'
import Transactions from './Transactions'


const TransactionHistory = ({transactions})=>(
  
  <ul>
    <table class="transaction-history">
  
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    
      
    {transactions.map((items)=>(
      
        
          <tbody key = {items.id}>
            <Transactions 
            type={items.type}
            amount={items.amount}
            currency={items.currency}

            />
          </tbody>
        
      
    ))}
    
   
  
  </table>
  </ul>
)
TransactionHistory.propTypes={
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    
  })).isRequired
}
export default TransactionHistory