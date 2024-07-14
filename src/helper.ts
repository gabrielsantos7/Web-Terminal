import { getCommandDescription } from "./services/get-command-description";

type CommandDictionary = { [key: string]: string };

export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export function generateIAPrompt(command: string): string {
  return `Please, provide a brief description (no more than 20 words) of the '${command}' command and its purpose. Examples of expected responses include: For 'ls': List contents of the current directory. For 'cd': Change to a specific directory. - For 'pwd': Print the current working directory, etc. If the command is not recognized, respond with: Command Not Found. For a list of basic commands, type 'help'. Note: Responses should reflect operations typical to a Linux terminal environment.`;
}

export async function processCommand(command: string): Promise<string> {
  const basicCommands: CommandDictionary = {
    ls: "List directory contents.",
    pwd: "Print working directory.",
  };
  const specialCommands: CommandDictionary = {
    help: "Display available commands.",
    exit: "Exit the terminal.",
    banner: 'Display Banner',
    clear: 'Clear the terminal screen.',
    time: 'Display current time.',
    history: 'Display command history.',
  };

  if (basicCommands.hasOwnProperty(command)) {
    return basicCommands[command];
  }

  if (specialCommands.hasOwnProperty(command)) {
    return specialCommands[command];
  }

  try {
    const response = await getCommandDescription(command);
    return response.text;
  } catch (error) {
    console.error('Error processing command:', error);
    return 'Command Not Found. For a list of available commands, type "help".';
  }
}

