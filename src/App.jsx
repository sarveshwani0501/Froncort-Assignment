import { useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ProjectView from "./pages/ProjectView";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Layout onSelectProject={setSelectedProject}>
      {selectedProject ? (
        <ProjectView project={selectedProject} />
      ) : (
        <Dashboard />
      )}
    </Layout>
  );
}

export default App;
