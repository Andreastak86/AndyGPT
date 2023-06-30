

const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>Tada!</li>
        </ul>
        <nav>
          <p>Made by me</p>
        </nav>
      </section>
      <section className="main">
        <h1>AndyGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            Chat GPT ANDY V1.0
          </p>

        </div>
      </section>
     
    </div>
  );
}

export default App;
