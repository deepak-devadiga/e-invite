import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
