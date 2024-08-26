const st1 = { display: "flex", justifyContent: "center", alignItems: "center" }
const st2 = { display: "flex", justifyContent: "space-around", alignItems: "center" }
const st3 = { display: "flex", justifyContent: "center", alignItems: "center", color: "#a3a3a3" }

function App() {

    return (


        <div style={{ backgroundColor: "#ebf5f9", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "12px", paddingTop: "12px" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "30px", borderRadius: "10px" }}>
                <div style={st1}>
                    <Img />
                </div>
                <h2 style={st1}>Julienne Moore</h2>
                <p style={st3}>julianne.moore@company.com</p>
                <div style={st2}>
                    <Post />
                    <Following />
                    <Followers />
                </div>
            </div>

        </div>


    )
}
function Img() {
    return (

        <img style={{ borderRadius: "50%", width: "100px", height: "100px" }} src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="tata" />

    )

}

function Post() {
    return (
        <div>
            <h1 style={st2}>25</h1>
            <h2 style={{ st2, color: "#a3a3a3" }}>Posts</h2>
        </div>
    )
}


function Following() {
    return (
        <div>
            <h1 style={st2}>350</h1>
            <h2 style={{ st2, color: "#a3a3a3" }}>Following</h2>
        </div>
    )
}

function Followers() {
    return (
        <div>
            <h1 style={st2}>1.5K</h1>
            <h2 style={{ st2, color: "#a3a3a3" }}>Followers</h2>
        </div>
    )
}




ReactDOM.createRoot(document.querySelector("#root")).render(<App />)