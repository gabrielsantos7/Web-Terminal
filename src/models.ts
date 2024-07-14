export interface IUsernameProps {
  timestamp: string;
}

export interface ICommand {
  id?: number;
  text: string;
  timestamp: string;
  current?: boolean;
  response?: string;
  handleClick?: () => void;
}
