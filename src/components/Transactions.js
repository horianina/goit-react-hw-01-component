import React from 'react'
import PropTypes from 'prop-types'


const Transactions = ({type,amount,currency})=>{
  return(
    
  // <table class="transaction-history">
    

    // <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      
    // </tbody>

   
  // </table>

  )
}
Transactions.propTypes={
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  
}

export default Transactions