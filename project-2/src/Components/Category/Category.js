import React from 'react';
import './Category.scss';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'shop/hats',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/jackets',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens',
    },
  ];


function Category() {

    const navigate = useNavigate();
    
    return (
        <div className='categories-container row'>
            {
                categories.map((cate) =>
                    <div className='col-lg-4 col-md-6 col-12 p-0' key={cate.id}>

                        <div className='category-container' onClick={() => navigate(cate.route)} >
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
                    </div>

                )
            }
        </div>
    )
}

export default Category