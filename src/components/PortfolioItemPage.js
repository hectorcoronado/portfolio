import React from 'react'

const PortfolioItemPage = (props) => {
  return (
    <div>
      <p>a thing i've done.</p>
      item page w/id {props.match.params.id}
    </div>
  )
}

export default PortfolioItemPage
