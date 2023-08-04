import React from 'react';
import './CardList.css'

function CardList({ filterMonster }) {

  return (
    <div>
          <div className="wrapper-container">
              
         
          {
              filterMonster.map((monster, index) =>
                      <div key={index}  className="card">
                          <img src={`https://robohash.org/${monster.id}`} alt="Image" />
                          <div className="content">
                              <h2>{monster.name}</h2>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, sed do aiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                          </div>
                      </div>
              )
          }
          </div>

    </div>
  )
}

export default CardList