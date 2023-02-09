import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaveBar from "./Components/NaveBar";
import MainVideo from "./Components/MainVideo";
import VideoList from "./Components/VideoList";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <NaveBar />
      <div class="row">
        <div class="col-8">
          <MainVideo />
          <Comments/>
        </div>
        <div class="col-4">
          <VideoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
