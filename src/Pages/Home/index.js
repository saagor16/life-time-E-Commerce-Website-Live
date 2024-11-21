import HomeBanner from "../../Components/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://klbtheme.com/bacola/wp-contant/uploads/2021/04/banner-box.jpg"
                className="cursor"
                alt=""
                />
            </div>

            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
