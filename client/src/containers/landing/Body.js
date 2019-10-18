import React, { Component } from 'react'

class Body extends Component {
    render() {
        return (
            <div>
                <section id="intro" className="clearfix">
                    <h1 className="text-center text-white font-weight-bold p-2">Department Of Computer Science & Engineering</h1>
                    <div className="container">
                        <div className="intro-img">
                            <img
                                src={
                                    "https://sjce.ac.in/wp-content/uploads/2015/08/IMG_5045-900x600.jpg"
                                }
                                alt=""
                                className="img-fluid front-image"
                            />
                        </div>

                        <div className="intro-info">
                            <h2 className="text-capitalize">
                                We impart
                                <br />
                                <span>quality education</span>
                                <br />
                                and industry skills!
                            </h2>
                        </div>
                    </div>
                </section>
                {/* <!-- #intro --> */}

                <main id="main">
                    {/* <!--==========================
      About Us Section
    ============================--> */}
                    <section id="about">
                        <div className="container">
                            <header className="section-header">
                                <h3>ABOUT US</h3>
                                <p>
                                    The inception of Department of Computer Science and
                                    Engineering (CS&E) was one among the first to be established
                                    in the State of Karnataka in the year 1982.
                                    <br />
                                    Our mission is to create ideas that deepen and advance our
                                    understanding of the realm of Computer Science and
                                    Engineering and with those ideas to develop innovative,
                                    principled, and insightful leaders who change the world.
                                    <br />
                                    Classes are conducted on a full-time and on part time basis
                                    in an intimate-scale environment, and take full advantage of
                                    the assets provided by JSS Science and Technology and its
                                    surrounding communities.
                                    <br />
                                    <br />

                                    The department is actively involved in International
                                    collaborative research and also in sponsored research
                                    projects through various funding agencies:
                                    <br />
                                </p>
                                <ol typeof='I' className='mb-4'>
                                    <li>
                                        Science and Engineering Research Board (SERB)
                                        </li>
                                    <li>
                                        Ministry of Human Resource Development (MHRD) 3.
                                    University Grant Commission (UGC)
                                        </li>
                                    <li>
                                        Department of Science and Technology (DST)
                                        </li>
                                </ol>
                            </header>

                            <div className="row mt-2 p-2 about-container">
                                <div className="col-md-6">
                                    <div className="icon-box wow fadeInUp">
                                        <div className="icon">
                                            <i className="fa fa-shopping-bag"></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Vision</a>
                                        </h4>
                                        <p className="description">
                                            Advancing JSS S&T University as a leader in education,
                                            research and technology on the international arena. To
                                            provide the students a universal platform to launch
                                            their careers, vesting the industry and research
                                            community with skilled and professional workforce.
                                            Accomplishing JSS S&T University as an epicentre for
                                            innovation, centre of excellence for research with state
                                            of the art lab facilities. Fostering an erudite,
                                            professional forum for researchers and industrialist to
                                            coexist and to work cohesively for the growth and
                                            development of science and technology for betterment of
                                            society
                                                </p>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="icon-box wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >

                                        <div className="icon">
                                            <i className="fa fa-photo"></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Mission </a>
                                        </h4>

                                        <p className="description">
                                            Education, research and social outreach are the core
                                            doctrines of JSS S&T University that are responsible for
                                            accomplishment of in-depth knowledge base, professional
                                            skill and innovative technologies required to improve
                                            the socio economic conditions of the country. Our
                                            mission is to develop JSS S&T University as a global
                                            destination for cohesive learning of engineering,
                                            science and management which are strongly supported with
                                            interdisciplinary research and academia.
                                                </p>

                                    </div>
                                </div>

                                {/* <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="fa fa-bar-chart"></i>
                      </div>
                      <h4 className="title">
                        <a href="#1">Motto</a>
                      </h4>
                      <p className="description">
                        True to JSS legacy and dedication to the service of
                        mankind the JSS Science & Technological University
                        adopted
                      </p>
                    </div> */}
                            </div>

                            <div className="row about-extra">
                                <div className="col-md-4 wow fadeInUp">
                                    <img
                                        src={
                                            "https://jssstuniv.in/wp-content/uploads/2018/11/MPP-Picture-500x500.jpg"
                                        }
                                        className="img-fluid w-80 img-hod"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-8 wow fadeInUp pt-5 pt-md-0">
                                    <h4>Our Beloved HOD</h4>
                                    <p>
                                        Dr. M P Pushpalatha, HOD pf department of Computer Science
                                        and Engineering, has mastered in the field of... graduated
                                        from.....
                                    </p>
                                    <p>
                                        Ad vitae recusandae odit possimus. Quaerat cum ipsum
                                        corrupti. Odit qui asperiores ea corporis deserunt
                                        veritatis quidem expedita perferendis. Qui rerum eligendi
                                        ex doloribus quia sit. Porro rerum eum eum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="p-md-4">
                        <div className="background order-lg-2 order-1 wow fadeInUp">
                            <img
                                src="https://jssstuniv.in/wp-content/uploads/2018/11/CSE-1800x870.jpg"
                                className="img-fluid img-branch"
                                alt=""
                            />
                        </div>
                    </div>


                    {/* SERVICES ABOUT SECTION */}

                    <section id="services" className="section-bg">
                        <div className="container">
                            <header className="section-header">
                                <h3>Services</h3>
                                <p>
                                    Laudem latine persequeris id sed, ex fabulas delectus quo.
                                    No vel partiendo abhorreant vituperatoribus.
                  </p>
                            </header>

                            <div className="row">
                                <div
                                    className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-analytics-outline"
                                                style={{ color: "#ff689b" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Resources</a>
                                        </h4>
                                        <p className="description">
                                            Voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint occaecati cupiditate non
                                            provident
                      </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-5 wow bounceInUp"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-bookmarks-outline"
                                                style={{ color: "#e9bf06" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Faculty</a>
                                        </h4>
                                        <p className="description">
                                            Minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat tarad limino ata
                      </p>
                                    </div>
                                </div>

                                <div
                                    className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                                    data-wow-delay="0.1s"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-paper-outline"
                                                style={{ color: "#3fcdc7" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Past Events</a>
                                        </h4>
                                        <p className="description">
                                            Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-5 wow bounceInUp"
                                    data-wow-delay="0.1s"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-speedometer-outline"
                                                style={{ color: "#41cf2e" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Upcoming Events</a>
                                        </h4>
                                        <p className="description">
                                            Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum
                      </p>
                                    </div>
                                </div>

                                <div
                                    className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
                                    data-wow-delay="0.2s"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-world-outline"
                                                style={{ color: " #d6ff22" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Department Acheivements</a>
                                        </h4>
                                        <p className="description">
                                            At vero eos et accusamus et iusto odio dignissimos
                                            ducimus qui blanditiis praesentium voluptatum deleniti
                                            atque
                      </p>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-5 wow bounceInUp"
                                    data-wow-delay="0.2s"
                                    data-wow-duration="1.4s"
                                >
                                    <div className="box">
                                        <div className="icon">
                                            <i
                                                className="ion-ios-clock-outline"
                                                style={{ color: " #4680ff" }}
                                            ></i>
                                        </div>
                                        <h4 className="title">
                                            <a href="#1">Department Workshops/Conference</a>
                                        </h4>
                                        <p className="description">
                                            Et harum quidem rerum facilis est et expedita
                                            distinctio. Nam libero tempore, cum soluta nobis est
                                            eligendi
                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #services -->

    <!--==========================
      Why Us Section
    ============================--> */}
                    <section id="why-us" className="wow fadeIn">
                        <div className="container">
                            <header className="section-header">
                                <h3>Why choose us?</h3>
                                <p>
                                    Laudem latine persequeris id sed, ex fabulas delectus quo.
                                    No vel partiendo abhorreant vituperatoribus.
                  </p>
                            </header>

                            <div className="row row-eq-height justify-content-center">
                                <div className="col-lg-4 mb-4">
                                    <div className="card wow bounceInUp">
                                        <i className="fa fa-diamond"></i>
                                        <div className="card-body">
                                            <h5 className="card-title">Corporis dolorem</h5>
                                            <p className="card-text">
                                                Deleniti optio et nisi dolorem debitis. Aliquam nobis
                                                est temporibus sunt ab inventore officiis aut
                                                voluptatibus.
                        </p>
                                            <a href="#1" className="readmore">
                                                Read more{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <div className="card wow bounceInUp">
                                        <i className="fa fa-language"></i>
                                        <div className="card-body">
                                            <h5 className="card-title">Voluptates dolores</h5>
                                            <p className="card-text">
                                                Voluptates nihil et quis omnis et eaque omnis sint
                                                aut. Ducimus dolorum aspernatur.
                        </p>
                                            <a href="#1" className="readmore">
                                                Read more{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <div className="card wow bounceInUp">
                                        <i className="fa fa-object-group"></i>
                                        <div className="card-body">
                                            <h5 className="card-title">Eum ut aspernatur</h5>
                                            <p className="card-text">
                                                Autem quod nesciunt eos ea aut amet laboriosam ab. Eos
                                                quis porro in non nemo ex.
                        </p>
                                            <a href="#1" className="readmore">
                                                Read more{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row counters">
                                <div className="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">274</span>
                                    <p>Clients</p>
                                </div>

                                <div className="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">421</span>
                                    <p>Projects</p>
                                </div>

                                <div className="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">1,364</span>
                                    <p>Hours Of Support</p>
                                </div>

                                <div className="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">18</span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--==========================
      Clients Section
    ============================--> */}

                    <section id="testimonials" className="section-bg">
                        <div className="container">
                            <header className="section-header">
                                <h3>Student Achievers</h3>
                            </header>

                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="owl-carousel testimonials-carousel wow fadeInUp">
                                        <div className="testimonial-item">
                                            <img
                                                src={require('../../views/img/akhilesh.jpg')
                                                }
                                                className="testimonial-img img-fluid rounded-circle"
                                                alt="" width="200"
                                            />
                                            <h3>Akhilesh Yadav</h3>
                                            <h4>Indian Politician</h4>
                                            <p>
                                                "Akhilesh Yadav, born on 1 July 1973, is the current
                                                        and the 20th Chief Minister of the Indian state of
                                                        Uttar Pradesh. He is the youngest person to have held this
                                                        office. His first significant success in politics was
                                                        his election as a member of the Lok Sabha for the
                                                        constituency of Kannauj in 2000.He was
                                                        born to Mulayam Singh Yadav, later a Chief Minister of
                                                        Uttar Pradesh, and Malti Devi. He was schooled at the
                                                        Dholpur Military School in Rajasthan, then obtained
                                                        his Bachelor's and master's degrees in Civil
                                                        Environmental Engineering from Sri Jayachamarajendra
                                                        College of Engineering (SJCE), Mysuru. He also has a
                                                        master's degree in environmental engineering from the
                                                        University of Sydney, Australia."
                        </p>
                                            <p>
                                                For more information:
                          <a href="https://en.wikipedia.org/wiki/Akhilesh_Yadav">
                                                    "https://en.wikipedia.org/wiki/Akhilesh_Yadav"
                          </a>
                                            </p>
                                        </div>

                                        <div className="testimonial-item">
                                            <img
                                                src={
                                                    "http://www.sjcealumni.org/assets/content_files/151337948//files/shanmugam.jpg"
                                                }
                                                className="testimonial-img"
                                                alt=""
                                            />
                                            <h3>Shanmugam Manjunath</h3>
                                            <h4>Indian Oil Corporation Officer(Grade A)</h4>
                                            <p>
                                                "Shanmugam Manjunath (23 February 1978 – 19 November
                                                2005) was a manager (grade A officer) for the Indian
                                                Oil Corporation (IOC) who was murdered for sealing a
                                                corrupt petrol station in Lakhimpur Kheri, UP. This
                                                incident inspired several students at IIM, IIT and
                                                other institutes culminating with the IIM students
                                                setting up the "The Manjunath Shanmugam Trust".
                                                Manjunath did his initial schooling from Kendriya
                                                Vidyalaya, BEML Nagar, Kolar Gold Fields, Karnataka.
                                                He finished his 10th in 1993 and 12th std in science
                                                stream in 1995 from the same school. Later on he did
                                                his Computer Science Engineering degree from Sri
                                                Jayachamarajendra College of Engineering, Mysore, and
                                                an MBA from Indian Institute of Management Lucknow."
                        </p>
                                        </div>

                                        <div className="testimonial-item">
                                            <img
                                                src={
                                                    "http://www.sjcealumni.org/assets/content_files/151337948//files/Nidhi-Subbaiah.jpg"
                                                }
                                                className="testimonial-img"
                                                alt=""
                                            />
                                            <h3>Nidhi Subbaiah</h3>
                                            <h4>Indian Actress</h4>
                                            <p>
                                                "Nidhi Subbaiah (born 16 February 1987) is an Indian
                                                film actress and model, who has appeared in various
                                                television advertisements and in South Indian Films,
                                                she rose to fame by acting in few successful Kannada
                                                movies such as Pancharangi (2010) and Krishnan
                                                Marriage Story (2011). Both these films brought her
                                                nominations for South Filmfare Awardsand the latter
                                                film won her SIIMA Special Appreciation Award-Kannada.
                                                Nidhi was born on 16 February 1987 in the Kodagu
                                                district of Karnataka as the only child to Bollachanda
                                                Subhash Subbaiah and Jhansi Subbaiah. Soon afterwards,
                                                her family later moved to Gokulam in the historic city
                                                of Mysore, where she spent most of her childhood and
                                                pursued her education. An alumnus of St. Joseph's
                                                Central, Mysore, she went on to study civil
                                                Engineering from Sri Jayachamarajendra College of
                                                Engineering (SJCE), Mysore."
                        </p>
                                        </div>

                                        <div className="testimonial-item">
                                            <img
                                                src={
                                                    "http://www.sjcealumni.org/assets/content_files/151337948//files/Adarsh_Founder.jpg"
                                                }
                                                alt=""
                                                className="testimonial-img"
                                            />
                                            <h3>B M Jayeshankar</h3>
                                            <h4>Builder/Real Estate</h4>
                                            <p>
                                                "Coming from a modest background, Mr. B M Jayeshankar
                                                always had an urge to be different. After completing
                                                his Civil Engineering from Sri. Jaychamarajendra
                                                College of Engineering, Mysore he decided to take a
                                                plunge in the real estate sector. With a clear focus
                                                on good quality and construction, Mr. Jayeshankar
                                                formed Adarsh Group in 1988. Combining his innovative
                                                ideas with devote attitude towards accommodating
                                                customer needs along with an uncompromising outlook
                                                towards quality, Adarsh has been able to achieve
                                                greater heights in the past 21 years. Today with
                                                around 5 million sq.ft of constructed space, Adarsh
                                                commands the repute of being an exclusive builder
                                                delivering unprecedented superior lifestyles under his
                                                command."
                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #testimonials -->

    <!--==========================
      Team Section
    ============================--> */}
                    <section id="team">
                        <div className="container">
                            <div className="section-header">
                                <h3>CLUBS</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque
                  </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-6 wow fadeInUp">
                                    <div className="member">
                                        <img
                                            src={
                                                "https://cdn-images-1.medium.com/max/344/1*GUnXaV_rVzuce67X__7G6w@2x.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>DSC JSSSTU</h4>
                                                <span>Chief Executive Officer</span>
                                                <div className="social">
                                                    <a href="#1">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-3 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="member">
                                        <img
                                            src={
                                                "http://www.innovatekarnataka.com/wp-content/uploads/2015/04/02-K-tech_logo_1791x481-04.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>K-Tech</h4>
                                                <span>Product Manager</span>
                                                <div className="social">
                                                    <a href="#1">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-3 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="member">
                                        <img
                                            src={
                                                "https://avatars0.githubusercontent.com/u/37414607?s=460&v=4"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>LCC SJCE</h4>
                                                <span>CTO</span>
                                                <div className="social">
                                                    <a href="#1">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-3 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="member">
                                        <img
                                            src={
                                                "https://scontent.fblr4-2.fna.fbcdn.net/v/t1.0-9/22815067_1974239449455990_8227355219962562949_n.jpg?_nc_cat=111&_nc_oc=AQnccq1h9VYZj2QLsRLHqbdFCp76mf3xPDvnTyzPScfzgSA0ppgNnq13Kx6GnJ91yTY&_nc_ht=scontent.fblr4-2.fna&oh=0298000eb5d52a92f3fb3e2beff7b6c8&oe=5E2DF24E"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Sparsh Talks</h4>
                                                <span>Accountant</span>
                                                <div className="social">
                                                    <a href="#1">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                    <a href="#1">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #team -->

    <!--==========================
      Clients Section
    ============================--> */}
                    <section id="clients" className="section-bg">
                        <div className="container">
                            <div className="section-header">
                                <h3>Our Recruiters</h3>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit
                                    voluptatem accusantium doloremque dere santome nida.
                  </p>
                            </div>

                            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "http://jssstuniv.in/wp-content/uploads/2017/08/placement_2.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "http://jssstuniv.in/wp-content/uploads/2017/08/placement_3.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "https://yt3.ggpht.com/a/AGF-l7-AXHAlBMHkxZZN2521nZp3YQ995sCWnQ0IIw=s900-c-k-c0xffffffff-no-rj-mo"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "http://jssstuniv.in/wp-content/uploads/2017/08/placement_5.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "http://jssstuniv.in/wp-content/uploads/2017/08/placement_6.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "https://sandiegoisbetter.com/wp-content/uploads/2016/10/Tacos-and-Tech-UltimateLifeHack-Event-Intuit-Logo-Icon-1.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "https://yt3.ggpht.com/a/AGF-l7-BBIcC888A2qYc3rB44rST01IEYDG3uzbU_A=s900-c-k-c0xffffffff-no-rj-mo"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "http://jssstuniv.in/wp-content/uploads/2017/08/placement_9.png"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-xs-6">
                                    <div className="client-logo">
                                        <img
                                            src={
                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_CK5Brz0nkScXcr-blUCRbjhsngiLHAsiVCk4SjtGMozYIyw"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--==========================
      Contact Section
    ============================--> */}
                    <section id="contact">
                        <div className="container-fluid">
                            <div className="section-header">
                                <h3>Contact Us</h3>
                            </div>

                            <div className="row wow fadeInUp">
                                <div className="col-lg-6">
                                    <div className="map mb-4 mb-lg-0">
                                        <iframe
                                            src={
                                                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.149409781525!2d76.6134265!3d12.3132715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1571046705180!5m2!1sen!2sin"
                                            }
                                            title="map"
                                            frameBorder="0"
                                            style={{ border: "0", width: "100%", height: "312px" }}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-5 info">
                                            <i className="ion-ios-location-outline"></i>
                                            <p>
                                                JSS Science and Technology University (Formerly SJCE)
                        </p>
                                        </div>
                                        <div className="col-md-4 info">
                                            <i className="ion-ios-email-outline"></i>
                                            <p>office@jssstuniv.in</p>
                                        </div>
                                        <div className="col-md-3 info">
                                            <i className="ion-ios-telephone-outline"></i>
                                            <p>0821-2548285,86,87</p>
                                        </div>
                                    </div>

                                    <div className="form">
                                        <div id="sendmessage">
                                            Your message has been sent. Thank you!
                      </div>
                                        <div id="errormessage"></div>
                                        <form action="" method="post" className="contactForm">
                                            <div className="form-row">
                                                <div className="form-group col-lg-6">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        data-rule="minlen:4"
                                                        data-msg="Please enter at least 4 chars"
                                                    />
                                                    <div className="validation"></div>
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        data-rule="email"
                                                        data-msg="Please enter a valid email"
                                                    />
                                                    <div className="validation"></div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 8 chars of subject"
                                                />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    rows="5"
                                                    data-rule="required"
                                                    data-msg="Please write something for us"
                                                    placeholder="Message"
                                                ></textarea>
                                                <div className="validation"></div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" title="Send Message">
                                                    Send Message
                          </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #contact --> */}
                </main>

                {/* <!--==========================
    Footer
  ============================--> */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="p-4">
                            <div className="row px-md-4">
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
                                <div className="col-lg-4 col-md-6 footer-contact">
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

                <a href="#about" className="back-to-top">
                    <i className="fa fa-chevron-up"></i>
                </a>
                {/* <!-- Uncomment below i you want to use a preloader --> */}
                {/* <div id="preloader"></div> */}
            </div>
        )
    }
}

export default Body
