export interface IUsernameProps {
  timestamp: string;
}

export interface ICommand {
  text: string;
  timestamp: string;
  current?: boolean;
  response?: string | JSX.Element
  handleClick?: () => void;
}

export type Mode = 'command' | 'action';
