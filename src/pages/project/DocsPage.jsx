import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import { useEffect, useState } from "react";

export default function DocsPage() {
  const [versionHistory, setVersionHistory] = useState([]);
  const [lastSaved, setLastSaved] = useState(null);

  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({ levels: [1, 2, 3] })],
    content:
      localStorage.getItem("docContent") || "<p>Start writing here...</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      localStorage.setItem("docContent", html);
      setLastSaved(new Date().toLocaleTimeString());
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const content = localStorage.getItem("docContent");
      const newVersion = {
        time: new Date().toLocaleString(),
        content,
      };
      setVersionHistory((prev) => [...prev, newVersion]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const restoreVersion = (version) => {
    if (editor) {
      editor.commands.setContent(version.content);
      localStorage.setItem("docContent", version.content);
    }
  };

  if (!editor) return <p>Loading editor...</p>;

  return (
    <div className="p-2">
      <h3 className="text-lg font-semibold mb-2">📝 Collaborative Docs</h3>

      <div className="flex flex-wrap items-center gap-2 mb-3 border-b pb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bold") ? "bg-gray-300" : ""
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("italic") ? "bg-gray-300" : ""
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("bulletList") ? "bg-gray-300" : ""
          }`}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""
          }`}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className="px-2 py-1 border rounded"
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          className="px-2 py-1 border rounded"
        >
          Redo
        </button>

        <span className="ml-auto text-sm text-gray-500">
          Autosaved: {lastSaved || "Just now"}
        </span>
      </div>

      <div className="border p-4 rounded bg-white min-h-[250px]">
        <EditorContent editor={editor} />
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">📜 Version History</h4>
        {versionHistory.length === 0 ? (
          <p className="text-gray-500">No previous versions yet...</p>
        ) : (
          <ul className="space-y-1">
            {versionHistory.map((v, i) => (
              <li
                key={i}
                className="flex items-center justify-between border p-2 rounded"
              >
                <span>{v.time}</span>
                <button
                  onClick={() => restoreVersion(v)}
                  className="text-blue-600 hover:underline"
                >
                  Restore
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
