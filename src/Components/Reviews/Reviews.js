import React from 'react'
import "./Reviews.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

const Reviews = () => {
    return (
        <>
            <div className='reviews'>
                <div>
                    <img src='https://rashki.com/cdn/shop/files/Swarnika_fero_mini_2.jpg?v=1717070945' />

                </div>
                <div className='reviewText'>
                    <div className='reviewBox'>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className='name'>
                            SWARNIKA
                        </div>
                        <div className='para'>
                            The Fero Mini Bag is a commendable blend of style and functionality, making it an excellent choice for everyday use. The bag offers ample storage space with well-organized compartments, catering to both work and casual needs.
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Reviews