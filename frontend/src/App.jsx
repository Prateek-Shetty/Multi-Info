import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Summaries from "./pages/Summaries";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo / App name */}
          <h1 className="text-xl font-bold tracking-wide">Multi-Info</h1>

          {/* Links */}
          <div className="flex gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/summaries"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Summaries
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-screen bg-gray-50 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/summaries" element={<Summaries />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
