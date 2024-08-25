import { Banner } from './components/banner';
import { Crash } from './components/crash';
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
  banner: Banner(),
  project: ProjectInfo(),
  'sudo rm -rf': Crash(),
};

const basicCommands: BasicCommands = {
  ls: 'List directory contents.',
  pwd: 'Print working directory.',
};

export function generateIAPrompt(input: string, mode: Mode): string {
  return mode === 'command'
    ? `Please, provide a brief description (no more than 20 words) of the '${input}' command and its purpose. Examples of expected responses include: For 'ls': List contents of the current directory. For 'cd': Change to a specific directory. For 'pwd': Print the current working directory, etc. If the command is not recognized, respond with: Command Not Found. Note: Responses should reflect operations typical to a Linux terminal environment.`
    : `Please, provide the Linux command(s) that would be used to accomplish the following task: '${input}'. For example, if the task is 'list all files', the response should be 'ls -a'.`;
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
