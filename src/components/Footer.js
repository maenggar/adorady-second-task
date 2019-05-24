import React from 'react';
import { MDBFooter} from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter className="text-center font-small dusty-grass-gradient">

            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href=""> Adroady Task-2</a>
            </p>
        </MDBFooter>
    );
}

export default Footer;