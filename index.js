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