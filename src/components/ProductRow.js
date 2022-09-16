import React from 'react';
import data from './data';

function ProductRow(props) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
      </tr>
    );
  }
  
export default ProductRow;