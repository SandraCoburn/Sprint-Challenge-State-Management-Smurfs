import React from "react";
import "./App.css";
import CardList from "./CardList";
import AddSmurfForm from "./AddSmurfForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smurfs Village</h1>
        <AddSmurfForm />
      </header>
      <CardList />
    </div>
  );
}

export default App;
