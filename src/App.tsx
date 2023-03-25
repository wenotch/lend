import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Dashboard from "./Views/Dashboard";
import UserDetail from "./Views/UserDetail";
import Login from "./Views/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "../src/context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div className="nav">
          <Header />
        </div>
        <div className="main">
          <Routes>
            <Route
              path="/user/:id"
              element={<ProtectedRoute children={<UserDetail />} />}
            />
            <Route path="/" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />
             */}
            <Route
              path="/dashboard"
              element={<ProtectedRoute children={<Dashboard />} />}
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
          {/* <Dashboard /> */}
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
