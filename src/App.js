import logo from './logo.svg';
import image from './img/rohit.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My React App</h1>
      <h2> Author: Rohit Pandey</h2>
      <img scr={image} alt="profile-image" />
    </div>
  );
}

export default App;
