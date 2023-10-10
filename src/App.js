import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingForm from './component/LandingForm/landingForm';
// import Home from './screens/Dashboard';
// import SignUp from '../src/screens/SignUp';
import Login from './component/SignInForm.jsx';
import VotingForm from './component/VotingForm/VotingForm';
// import Dashboard from '../src/screens/Dashboard';
// import Form from '../src/screens/Form';
// import UpdateForm from '../src/screens/UpdateForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingForm />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/voting-form' element={<VotingForm />}></Route>
          {/* <Route path='/add' element={<Form />}></Route> */}
          {/* <Route path='/update' element={<UpdateForm />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;