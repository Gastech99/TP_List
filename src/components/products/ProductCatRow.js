import React from 'react'

function ProductCatRow({name}) {
  return <tr>
            <td colSpan={2}><strong>{name}</strong></td>
        </tr>
}

export default ProductCatRow