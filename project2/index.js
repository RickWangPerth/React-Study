function Info(){
    return(
        <div className="Info container">
            <div className="row row-content">
                <div className="col-4"></div>
                <div className="col-4">
                        <img className="photo" src="./head.jpeg" alt="Rick-photo"></img>
                        <h1>Xinlyu Wang Rick</h1>
                        <h3>Frontend Developer</h3>
                        <p>Master of IT &amp; Master of Professional Engineering</p>
                        <div className="btnlink">
                            <a role="button" href="mailto: xinlyuwang96@gmail.com" className="btn btn-light"><span className="fa-solid fa-envelope"></span><span> Email</span></a>
                            <a role="button" href="https://www.linkedin.com/in/xinlyuwang" className="btn btn-primary"><span className="fa-brands fa-linkedin"></span><span> LinkedIn</span></a>
                        </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

function About(){
    return(
        <div className="About container">
        <div className="row row-content">
            <div className="col-4"></div>
            <div className="aboutcont col-4">
                <h2>About</h2>
                <p>Master of IT &amp; Master of Professional Engineering</p>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
    )
}

function Interests(){
    return(
        <div className="Interests container">
        <div className="row row-content">
            <div className="col-4"></div>
            <div className="interestscont col-4">
                <h2>Interests</h2>
                <p>Master of IT &amp; Master of Professional Engineering</p>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
    )
}

function Footer(){
    return(
        <div className="Footer container">
        <div className="row row-content">
            <div className="col-3"></div>
            <footer className="footer"> 
                <a role="button" href="#" className="footbtn btn-dark"><span className="fa-brands fa-discord"></span></a>
                <a role="button" href="#" className="footbtn btn-dark"><span className="fa-brands fa-facebook"></span></a>
                <a role="button" href="#" className="footbtn btn-dark"><span className="fa-brands fa-instagram"></span></a>
                <a role="button" href="#" className="footbtn btn-dark"><span className="fa-brands fa-twitter"></span></a>
                <a role="button" href="#" className="footbtn btn-dark"><span className="fa-brands fa-github"></span></a>
            </footer>
            <div className="col-3"></div>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
)