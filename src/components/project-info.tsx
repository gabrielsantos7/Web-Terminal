export function ProjectInfo() {
  return (
    <div>
      <p className="text-main-yellow pt-2">
        WebTerminal v1.0.0 - Project Information
      </p>
      <p className="py-2 text-main-green">Developed with:</p>
      <ul>
        <li>- React</li>
        <li>- TypeScript</li>
        <li>- Tailwind CSS</li>
        <li>- Express (Backend)</li>
        <li>- Gemini AI</li>
      </ul>
      <p className="py-2 text-main-green">Project Purpose:</p>
      <p className="pb-4">
        This project is designed to assist users who are new to Linux or
        transitioning to it. By simulating a Linux terminal, it not only helps
        users understand and practice terminal commands in a safe, educational
        environment but also allows them to explore command functionality in two
        distinct modes. Users can either enter commands to see their effects or
        search for a command based on a described action they want to perform,
        making it both an interactive learning tool and a practical guide for
        mastering the command line.
      </p>
    </div>
  );
}
