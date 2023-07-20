import logo from './logo.svg';
import './App.css';
import Convert from './pages/Convert';

function App() {
  return (
    <div className="App">
      <nav class="topnav">
    <div class="left-section">
      <a class="logo" href="#"><img src="logo.png" alt="Logo" /></a>
      <a class="company-name" href="#">Company Name</a>
    </div>
    <div class="right-section">
      <a href="#">Action 1</a>
      <a href="#">Action 2</a>
      <a href="#">Action 3</a>
      <a class="profile-icon" href="#"><img src="profile-icon.png" alt="Profile Icon" /></a>
    </div>
  </nav>
      <Convert />
    </div>
  );
}

export default App;
