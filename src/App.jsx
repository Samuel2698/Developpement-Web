import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <div className="App">
      <TwitterFollowCard isFollowing userName>
        Miguel D
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
    </div>
  );
};

export default App;
