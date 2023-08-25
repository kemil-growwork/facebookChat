"use client";
import logo from "./logo.svg";
import "./App.css";
import { FacebookProvider, CustomChat } from "react-facebook";

function App() {
  return (
    <div className="App">
      <FacebookProvider appId="1439262506867166" chatSupport>
        <CustomChat pageId="116330111561365" minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default App;
