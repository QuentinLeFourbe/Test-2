import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfilePage from './components/Pages/UserProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
