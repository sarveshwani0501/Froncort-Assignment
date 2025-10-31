export default function ProjectView({ project }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{project}</h2>
      <p className="text-gray-600">
        Project details and modules will appear here.
      </p>
    </div>
  );
}
