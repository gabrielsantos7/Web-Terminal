import { Banner } from './components/banner';
import { Help } from './components/help';
import { ProjectInfo } from './components/project-info';
import { Mode } from './models';
import { getCommandDescription } from './services/get-command-description';

type BasicCommands = { [key: string]: string };
type SpecialCommands = { [key: string]: JSX.Element };

export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

const specialCommands: SpecialCommands = {
  help: Help(),
  banner: Banner(),
  project: ProjectInfo()
};

const basicCommands: BasicCommands = {
  ls: 'List directory contents.',
  pwd: 'Print working directory.',
};

export function generateIAPrompt(input: string, mode: Mode): string {
  return mode === 'command'
    ? `Please, provide a brief description (no more than 20 words) of the '${input}' command and its purpose. Examples of expected responses include: For 'ls': List contents of the current directory. For 'cd': Change to a specific directory. For 'pwd': Print the current working directory, etc. If the command is not recognized, respond with: Command Not Found. Note: Responses should reflect operations typical to a Linux terminal environment.`
    : `Please provide the exact Linux command(s) required to accomplish the following specific task: '${input}'. Ensure that the task is related to standard Linux operations (e.g., file management, system monitoring) and avoid vague or abstract requests. For example, if the task is 'list all files', the response should be 'ls -a'. If the task is not relevant or does not correspond to a specific command, respond with 'Invalid task description. Please specify a clear and actionable task.'
`;
}

export async function processCommand(
  command: string,
  mode: Mode
): Promise<string | JSX.Element> {
  if (basicCommands.hasOwnProperty(command)) {
    return basicCommands[command];
  }

  if (specialCommands.hasOwnProperty(command)) {
    return specialCommands[command];
  }

  try {
    const response = await getCommandDescription(command, mode);
    return response.text;
  } catch (error) {
    console.error(error);
    return 'An error ocurred. Try again later.';
  }
}
