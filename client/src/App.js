import './App.css';
import PostComments from './PostComments';
import PostCreate from './postCreate'

function App() {
  return (
    <div className="App">

      <h1> Title</h1>
      <PostCreate/>
      <PostComments/>
    </div>
  );
}

export default App;
