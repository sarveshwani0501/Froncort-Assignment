import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
//import { Sidebar } from "./ui/Sidebar";

export default function Layout({ children, onSelectProject }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
