/*
import React from "react"
import ReactDOM from "react-dom"
*/
function Header(){
    return(
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Title(){
    return(
        <h1>Reasons I'm excited to learn React</h1>
    )
}

function Page() {
    return (
        <div>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 rick development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(
    <div>
        <Header />
        <Title />
        <Page />
        <Footer />
    </div>,
    document.getElementById("root"))
