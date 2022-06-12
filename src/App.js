import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <ToastContainer />
            <Routes>
              <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
