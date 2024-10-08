import "./App.css";

function App() {
  const user = "Mark";
  return (
    <div>
      <Navbar />
      <MainPage user={user} />
    </div>
  );
}
export default App;

function Navbar() {
  return <nav style={{ background: "#10ADDE", color: "#fff" }}>Demo App</nav>;
}

function MainPage(prop) {
  return (
    <div>
      <h3>Main Page</h3>
      <Content user={prop.user} />
    </div>
  );
}

function Content(prop) {
  return (
    <div>
      <Message user={prop.user} />
    </div>
  );
}

function Message(prop) {
  return <p>Welcome {prop.user}</p>;
}
