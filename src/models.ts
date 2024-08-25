export type Mode = 'command' | 'action';
export type Response = string | JSX.Element;
export interface IUsernameProps {
  timestamp: string;
}

export interface ICommand {
  text: string;
  timestamp: string;
  current?: boolean;
  response?: Response;
  handleClick?: () => void;
}
