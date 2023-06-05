import { useState } from "react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home name={name} setName={setName} />} />
        <Route
          path="chat"
          element={
            <ProtectedRoute name={name}>
              <Chat name={name} setName={setName} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const NotFound = () => {
  return (
    <div className="flex gap-5 justify-center items-center h-screen text-center flex-col">
      <h1 className="text-4xl">You are lost!</h1>
      <p>How do you expect us to find you when that person can't?</p>
    </div>
  );
};

export default App;
