/* import logo from "./logo.svg"; */
import "./App.css";
import "./components/MyComponents";
import ButtonComponent from "./components/MyComponents";
import ImageComponent from "./components/ClassComponent";
import MyTitle from "./components/TitlePage";

function App() {
  return (
    <div className="App">
      <MyTitle title="La mia prima React app" margin="0"></MyTitle>
      <ImageComponent
        src="http://placekitten.com/200/300"
        alt="kitty pic"
        size="1"
      ></ImageComponent>
      <ButtonComponent
        title="Push"
        color="green"
        size="2"
        family="sans serif"
        weight="700"
      ></ButtonComponent>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
