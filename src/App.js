import React from "react";
import "./App.css";
 
function App() {
    return (
        <>
            <p className="title">Registration Form</p>
 
            <form className="App">
                <input type="text" />
                <input type="email" />
                <input type="password" />
                <input type={"submmit"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
 
export default App;