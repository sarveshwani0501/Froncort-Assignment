import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const projects = ["Project Alpha", "Project Beta", "Project Gamma"];

  return (
    <>
      {/* Hamburger for small screens */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden fixed top-4 left-4 bg-gray-900 text-white p-2 rounded z-50"
      >
        <Menu size={20} />
      </button>

      <aside
        className={`${
          open ? "block" : "hidden"
        } sm:block w-64 bg-gray-100 border-r border-gray-300 p-4 h-screen`}
      >
        <h2 className="font-bold text-gray-700 mb-2">Projects</h2>
        <ul className="space-y-2">
          {projects.map((name, i) => (
            <li key={i}>
              <Link
                to={`/project/${encodeURIComponent(name)}`}
                className="block p-2 rounded hover:bg-gray-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
