import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      {Date()}
      <Post autor="Daniel" corpo="React.js is awesome!" />
      <Post autor="Mariana" corpo="Alo galera do rodeio" />
    </main>
  );
}

export default App;
