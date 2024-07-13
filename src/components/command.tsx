import { Username } from './username';
import { Typer } from './typer';
import { ICommand } from '../models';

export function Command({ text, timestamp, current }: ICommand) {
  return (
    <div className="flex justify-start items-center">
      <Username timestamp={timestamp} />
      <p>{text}</p>
      {current && <Typer />}
    </div>
  );
}
