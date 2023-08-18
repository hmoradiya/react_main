import React from 'react';
import './Category.scss';

function Category({ categories }) {
    return (
        <div className='categories-container row'>
            {
                categories.map((cate) =>
                    <div className='col-lg-4 col-md-6 col-12 p-0' key={cate.id}>

                        <div className='category-container' >
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