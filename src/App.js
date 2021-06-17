//import Parent from "./Parent";
import SlideShow from "./SlideShow";

function App() {
  return (
    <div className="App">
      <SlideShow>
        <img src="./assets/1.jpg" alt="" width="500" />
        <img src="./assets/2.jpg" alt="" width="500" />
        <img src="./assets/3.jpg" alt="" width="500" />
      </SlideShow>
    </div>
  );
}

export default App;
