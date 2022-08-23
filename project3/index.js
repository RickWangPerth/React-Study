function Nav() {
    return (
        <nav className="nav">
            <img src="./images/airbnb-logo.png" className="nav-logo" alt="airbnb-logo" />
        </nav>
    )
}

function MainContent() {
    return (
        <div className="hero">
            <div className="hero-img">
                <img src="./images/photo-grid.png" alt="photo-grid" />
            </div>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
function Cards() {
    return (
        <section>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-4">
                        <div className="card1">
                            <img src="./images/katie-zaferes.png" className="card-img-top" alt="katie" />
                            <div className="card-body">
                                <div className="card-star">
                                    <img src="./images/star.png" className="star-img" alt="star" />
                                    <span>5</span>
                                    <span className="grey">(6).</span>
                                    <span className="grey">USA</span>
                                </div>
                                <p>Life lessons with Katie Zaferes</p>
                                <p><strong>From $136</strong> / person</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>

        </section>
        
    )
}

function Footer() {
    return (
        <footer>
        </footer> 
    )
}

function Page() {
    return (
        <div>
            <Nav />
            <MainContent />
            <Cards />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page />)