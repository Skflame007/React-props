import './App.css';
import Profile from './Profile/Profile.js'

function App() {
  
  function handleName(fullName) {
    alert(`Hello It's me ${fullName}`);
  };
  return (  
    <>
      <Profile
        fullName ="Salim Khalfouni"
        bio="Student at GMC"
        profession="Full-stack developer"
        handleName={handleName} />
    </>
  );
}

export default App;