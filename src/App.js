import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Movie recommender app</h3>
        <p>under construction...</p>
      </header>
      <Switch>
          {/* <Route exact path={'/trips', '/'} component={AllTrips} /> */}
          <Route exact path='/healthcheck' component={Healthcheck} />
          </Switch>
    </div>
  );
}

export default App;
