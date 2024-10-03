const DescriptionBox = ({ reviewsCount = 122 }) => {
    return (
        <section className='descriptionbox'>
            <nav className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews ({reviewsCount})</div>
            </nav>
            <article className='descriptionbox-description'>
                <p>
                    An eCommerce website is a digital platform that enables businesses to conduct online sales, offering customers the convenience of browsing, selecting, and purchasing products or services from the comfort of their devices. These websites feature essential elements such as product catalogs, search functionality, shopping carts, and secure payment gateways, ensuring a seamless shopping experience.
                </p>
                <p>
                    An eCommerce website is a virtual marketplace where businesses showcase and sell their products or services to customers online. It allows users to explore detailed product listings, read reviews, and make informed purchasing decisions from the convenience of their home.
                </p>
            </article>
        </section>
    );
};

export default DescriptionBox;
