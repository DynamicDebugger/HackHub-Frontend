import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetail from "./pages/IssueDetailPage/IssueDetail";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {true ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetail />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
