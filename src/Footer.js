import { Link } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    return(

        <footer className="cont py-3 my-4 ">
            <ul className="nav justify-content-center  border-bottom pb-3 mb-3">
                <li className="nav-item px-2"><Link className="foot" to="/">Home</Link></li>
                <li className="nav-item px-2"> <Link className="foot" to="/about">Abou</Link>t</li>
                <li className="nav-item px-2"> <Link className="foot" to="/knitting">Knittin</Link>g</li>
            </ul>
            <h6 className="text-center text-body-light">Design and development: Butylava Aksana ©️2024 All rights reserved.</h6>

            <h6 className="text-center text-body-light">Site is created for educational purposes and does not constitute an actual offer.</h6>
        </footer>
    )
}
export default Footer;