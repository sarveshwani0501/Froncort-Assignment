import React from "react";
export default function Sidebar({ onSelectProject }) {
  const projects = ["Project Alpha", "Project Beta", "Project Gamma"];

  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-300 p-4 h-screen">
      <h2 className="font-bold text-gray-700 mb-2">Projects</h2>
      <ul className="space-y-2">
        {projects.map((p, i) => (
          <li
            key={i}
            onClick={() => onSelectProject(p)}
            className="cursor-pointer hover:bg-gray-200 rounded p-2"
          >
            {p}
          </li>
        ))}
      </ul>
    </aside>
  );
}
