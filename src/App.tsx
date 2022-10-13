import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Mock React Website Deployment Header</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload (Maximilian).
            </p>
            <img
                className="DeerPhoto"
                src="https://image.shutterstock.com/image-photo/silhouette-large-bull-elk-stag-260nw-325904582.jpg"
                alt="Deer"
            />
        </div>
    );
}

export default App;
