//import Parent from "./Parent";
//import SlideShow from "./SlideShow";
import UseRefHookExplained from "./components/UseRefHook/UseRefHookExplained";
import ChildElement from "./components/ChildrenApi/ChildElement";

const centerContent = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  background: "#333",
  color: "#f4f4f4",
  height: "100vh",
};

function App() {
  return (
    <div className="App">
      {/* <SlideShow>
        <img src="./assets/1.jpg" alt="" width="500" />
        <img src="./assets/2.jpg" alt="" width="500" />
        <img src="./assets/3.jpg" alt="" width="500" />
      </SlideShow> */}
      {/* <UseRefHookExplained style={centerContent} /> */}
      <div style={centerContent}>
        <ChildElement />
      </div>
    </div>
  );
}

export default App;
