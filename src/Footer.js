import 'bootstrap-icons/font/bootstrap-icons';

const Footer = () => {

    return(
        <div id="contact" className="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div style={{ marginTop: "2rem"}} className="row justify-content-center py-5">
                    <div className="col-11">
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 className="text-muted mb-md-0 mb-5 bold-text">Andrew Gratton.</h3>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5 "><b>MENU</b></h6>
                                <ul className="list-unstyled">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#aboutme">About me</a></li>
                                    <li><a href="#education">Education</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p className="mb-1">Sneyd Green</p>
                                <p className="mb-1">Stoke-on-Trent</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p className="social text-muted mb-0 pb-0 bold-text"> 
                                <a href="https://www.facebook.com/Gratto2988"><span className="mx-2 facebook"><i className="fab fa-facebook-square"></i></span></a>
                                <a href="https://www.instagram.com/andyg2988/ "><span className="mx-2 instagram"><i className="fab fa-instagram"></i></span></a>
                                <a href="https://www.linkedin.com/in/andrew-gratton-98a05a165/"><span className="mx-2 linkedin" ><i className="fab fa-linkedin"></i></span></a>
                                </p>
                                <p><span>&#174; </span>All Rights Reserved.</p>
                            </div>
                            
                            <div className="col-xl-4 col-md-4 col-sm-4 col-auto order-1 align-self-end " style={{marginTop: "1rem"}}>
                                <h6 className="mt-55 mt-2 text-muted bold-text"><b>Email</b> <i className="fa fa-envelope" aria-hidden="true"></i></h6>
                                <a href="mailto:agratton2988@googlemail.com"><p> agratton2988@googlemail.com</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;