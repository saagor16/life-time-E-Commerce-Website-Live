import Sidebar from "../../Components/Sidebar";

const Listing = () => {
    return (
        <>
            <section className='product_Listing_Page'>
                <div className='container'>
                    <div className='productListing d-flex'>
                        <Sidebar></Sidebar>

                        <div className="content_right">
                            content right
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Listing;