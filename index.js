function MainContent() {
    return (
        <div>
            <img src="./react-logo.png" alt="react-logo" width= "40px"></img>
            <h1><strong>Fun fact about React</strong></h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div>
        <MainContent />
    </div>
) 
/*
import React from "react"
import ReactDOM from "react-dom"

function Header(){
    return(
        <header>
            <nav>
                <img src="./react-logo.png" width="20px" />
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
*/