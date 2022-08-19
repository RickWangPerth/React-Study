//import React from "react"
//import ReactDOM from "react-dom/client"
//import Header from "./Header"
//import Footer from "./Footer"
//import MainContent from "./MainContent"

function Nav() {
    return (
        <nav className="nav">
            <img src="./images/airbnb-logo.png" className="nav-logo" />
        </nav>
    )
}

function MainContent() {
    return (
        <div>
        </div>
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
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page />)