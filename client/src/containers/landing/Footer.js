import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="footer-top p-4">
                    <div className="row" style={{'margin': '0'}}>
                        <div className="col-lg-5 col-md-6 d-none d-md-block footer-info">
                            <h3 className="font-weight-bold">JSS STU</h3>
                            <p>
                                JSS Science and Technology University is one of the recent
                                additions to the institutions administered by JSS
                                Mahavidyapeetha, and is the second University being
                                established besides a Medical University at Mysuru.
                                India’s higher education system is on the verge of major
                                reforms and JSS Science and Technology University has been
                                established envisioning to create a bright future and a
                                desired learner centric eco-system and transform into a
                                futuristic global University. The Availability of skilled
                                human resources and trained technical manpower in
                                engineering and technology is a major reason for growing
                                investments in the state. In this context higher education
                                system has a key role and more particularly JSS S&T U with
                                an objective of transforming the students at all levels of
                                higher education including research and innovation with
                                measures to improve quality of workforce.
                                    </p>
                        </div>
                        <div className="text-center col-lg-4 col-md-6 footer-contact">
                            <h3>Contact Us</h3>
                            <p>
                                JSS Science and Technology University (Formerly SJCE),
                      <br />
                                JSS TI Campus,
                      <br />
                                Mysuru 570006
                      <br />
                                <strong>Phone:</strong> 0821-2548285,86,87
                      <br />
                                <strong>Email:</strong> office@jssstuniv.in
                      <br />
                            </p>

                            <div className="social-links">
                                <a
                                    href="https://twitter.com/jssstuniv"
                                    className="twitter"
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/JSSSTUNIV/"
                                    className="facebook"
                                >
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/jssstuniv/"
                                    className="instagram"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCQxvuSKHiwlSzXpQX2rSRDw"
                                    className="youtube"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jss-science-and-technology-university-301983175/"
                                    className="linkedin"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  d-none d-lg-block footer-newsletter">
                            <h3>Our Newsletter</h3>
                            <p>
                                Tamen quem nulla quae legam multos aute sint culpa legam
                                noster magna veniam enim veniam illum dolore legam minim
                                quorum culpa amet magna export quem marada parida nodela
                                caramase seza.
                    </p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>JSS S&TU</strong>. All Rights Reserved
              </div>
                    <div className="credits">
                        Designed by{" "}
                        <a href="https://sites.google.com/view/dscjssuniversity/home">
                            DSC JSSSTU
                </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
