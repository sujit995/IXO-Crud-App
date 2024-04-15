import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignInSignUpForm from './components/SignInPage';

function App() {
  return (
   <>
   <Routes>
   <Route path='/' element={<SignInSignUpForm />} />
    <Route path='/home' element={<Home />} />
   </Routes>
   </>
  );
}

export default App;
