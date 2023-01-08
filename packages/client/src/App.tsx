import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfilePage from './components/Pages/UserProfilePage';
import './App.css';
import Header from './components/Organisms/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import CalendarPage from './components/Pages/CalendarPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/" element={<CalendarPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
