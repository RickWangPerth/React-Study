function Info(){
    return(
        <div className="Info">
            <img className="photo" src="./head.jpeg" alt="Rick-photo"></img>
            <h1>Xinlyu Wang Rick</h1>
            <h3>Frontend Developer</h3>
            <p>Master of IT % Master of Professional Engineering</p>
            <div>
                <a role="button" href="mailto: xinlyuwang96@gmail.com" className="btn btn-light">Email</a>
                <a role="button" href="www.linkedin.com/in/xinlyuwang" className="btn btn-primary">LinkedIn</a>
            </div>
            

        </div>
    )
}

function About(){
    return(
        <h1>About</h1>
    )
}

function Interests(){
    return(
        <h1>Interests</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
        <Info />
        <About />
        <Interests />
    </div>
)