import { BrowserRouter, Route, Routes } from "react-router-dom"
import { store } from "./store"
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify"
import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer limit={3} />
      </Provider>
    </div>
  );
}

export default App;
