import React from 'react'
import Nav from '../components/Nav'

function CategoryPage({categoria}) {
  return (
    <div className="categoryPage">
        <Nav/>
        <div>CategoryPage {categoria}</div>
    </div>
  )
}

export default CategoryPage