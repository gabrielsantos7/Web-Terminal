import { Username } from './username';
import { Typer } from './typer';
import { ICommand } from '../models';

export function Command({ text, timestamp, current, handleClick, response }: ICommand) {
  return (
    <>
    <div className="flex justify-start items-center" onClick={handleClick}>
      <Username timestamp={timestamp} />
      <p>{text}</p>
      {current && <Typer />}
    </div>
    <p>{response}</p>
    </>
  );
}
