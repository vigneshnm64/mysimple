import React from "react";
import "./App.css";
 import Mydata from "./component/Mydata.js/Mydata";
function App() {
    return (
        <>
            <p className="title">Registration Form for the user</p>
 
            <form className="App">
                Name of user<input type="text" />
                Email<input type="email" />
                Password for<input type="password " />
                Subbmite<input type={"submmitted"}
                    style={{ backgroundColor: "#a1eafb" }} />
            </form>
            <div>
            <Mydata />
            </div>
        </>
    );
}
 
export default App;