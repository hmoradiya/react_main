import React from 'react';
import './Category.scss'

function Category({ categories }) {
  return (
      <div className='categories-container'>
          {
              categories.map((cate) =>
                  <div className='category-container' key={cate.id}>
                      <div
                          className='background-image'
                          style={{
                              backgroundImage: `url(${cate.imageUrl})`,
                          }}
                      />
                      <div className='category-body-container'>
                          <h2 className='style-font'>{cate.title}</h2>
                          <p>Shop Now</p>
                      </div>
                  </div>
              )
          }
      </div>
  )
}

export default Category