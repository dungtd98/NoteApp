import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage'

import ProtectedRoute from "./ultis/ProtectedRoute";
import { ContextProvider } from "./context/AuthContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <ContextProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<NoteListPage />} />
                <Route path="/note/:noteID" element={<NotePage />} />
              </Route>
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;