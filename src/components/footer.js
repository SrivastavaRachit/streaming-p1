import React from 'react'
import '../stylesheets/footer.css';
export default function Footer() {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Stream-V <i> © 2021 STAR.</i>   All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">About Us</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Privacy Policy</a></li>
                                <li><a href="http://scanfcode.com/category/android/">Android,Ios</a></li>
                                {/* <li><a href="http://scanfcode.com/category/templates/">Templates</a></li> */}
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            {/* <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/"></a></li>
                                <li><a href="http://scanfcode.com/contact/"></a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/"></a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/"></a></li>
                                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="#">Scanfcode</a>.
                            </p>
                        </div>


                        <div className="col-md-4 col-sm-6 col-xs-12">
                            {/* <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul> */}

                        </div>

                    </div>

                </div>
            </footer>
            )


        </div>
    )
}