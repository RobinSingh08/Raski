import React from 'react'
import "./SomeNews.css"

const SomeNews = () => {
    return (
        <>
            <div className='whatshead'>
                WE HAVE SOME NEWS!
            </div>
            <div className='somenews'>
                <img src='https://rashki.com/cdn/shop/files/Hindustan_Times_logo_svg_150x150@2x.png?v=1689319448' />
                <img src='https://rashki.com/cdn/shop/files/the_times_of_india_150x150@2x.png?v=1689319449' />
                <img src='https://rashki.com/cdn/shop/files/logo_150x150@2x.webp?v=1689319449' />
                <img src='https://rashki.com/cdn/shop/files/elle_150x150@2x.png?v=1689319910' />
                <img src='https://rashki.com/cdn/shop/files/download_1_76058f25-3344-4eb6-a16b-696fc4224895_150x150@2x.png?v=1689328929' />
            </div>
            <div className='whatshead'>
                DELIVERING MORE
            </div>
            <div className='delMore'>
                <div className='delBox'>
                    <img src='https://cdn.shopify.com/s/files/1/0018/0011/0115/files/medal_1.png?v=1689234659' />
                    <div className='text'>6 Months warranty</div>
                </div>
                <div className='delBox'>
                    <img src='https://cdn.shopify.com/s/files/1/0018/0011/0115/files/delivery.png?v=1689233079' />
                    <div className='text'>Free Shipping</div>
                </div>
                <div className='delBox'>
                    <img src='https://cdn.shopify.com/s/files/1/0267/5985/6318/files/WhatsApp_Image_2023-02-06_at_16.17.16.jpg?v=1675681326' />
                    <div className='text'>Easy Exchange</div>
                </div>
                <div className='delBox'>
                    <img src='https://cdn.shopify.com/s/files/1/0018/0011/0115/files/transfer.png?v=1689233078' />
                    <div className='text'>Secure Checkout</div>
                </div>
            </div>
        </>
    )
}

export default SomeNews