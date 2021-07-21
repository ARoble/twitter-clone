import { useState, React } from "react";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import RightSection from "./components/RightSection";

function App() {
  const [tweets, setTweet] = useState([
    {
      id: 1,
      tweet: "This is fricking crazy Denmark to the semi finals!! 🤯",
    },
    {
      id: 2,
      tweet: "Man im hello bord!",
    },
  ]);

  return (
    <div className="container">
      <SideNav />
      <Main />
      <RightSection />
    </div>
  );
}

export default App;
