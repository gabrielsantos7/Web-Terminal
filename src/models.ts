export interface IUsernameProps {
  timestamp: string;
}

export interface ICommand {
  text: string;
  timestamp: string;
  current?: boolean;
  handleClick?: () => void;
  response?: string
}
