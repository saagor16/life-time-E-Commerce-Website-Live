import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import Button from '@mui/material/Button'

const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                    <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-3">
                                <Link to={'/'}><img src={Logo} alt="Logo"/></Link>
                            </div>

                            <div className="part2 d-flex align-items-center col-sm-10">
                                <Button className="countryDrop"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;