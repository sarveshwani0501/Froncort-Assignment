import { useParams, Link, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import DocsPage from "./project/DocsPage";
import KanbanPage from "./project/KanbanPage";
export default function ProjectView() {
  const name = useParams();
  const [currentTab, setCurrentTab] = useState("docs");
  console.log(name);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{name["name"]}</h2>
      <nav className="flex space-x-4 mb-4 border-b pb-2">
        <div to="docs" className="text-blue-600 hover:underline font-medium">
          Docs
        </div>
        <Link to="kanban" className="text-blue-600 hover:underline font-medium">
          Kanban
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="docs" />} />
        <Route path="docs" element={<DocsPage />} />
        <Route path="kanban" element={<KanbanPage />} />
      </Routes>
    </div>
  );
}
