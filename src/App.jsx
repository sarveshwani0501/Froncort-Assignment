import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ProjectView from "./pages/ProjectView";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // <Layout onSelectProject={setSelectedProject}>
    //   {selectedProject ? (
    //     <ProjectView project={selectedProject} />
    //   ) : (
    //     <Dashboard />
    //   )}
    // </Layout>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:name/*" element={<ProjectView />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
