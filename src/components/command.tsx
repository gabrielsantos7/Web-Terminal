import { Username } from './username';
import { Typer } from './typer';
import { ICommand } from '../models';

export function Command({
  text,
  timestamp,
  current,
  handleClick,
  response,
}: ICommand) {

  return (
    <>
      <div className="flex justify-start items-center" onClick={handleClick}>
        <Username timestamp={timestamp} />
        <p>{text}</p>
        {current && <Typer />}
      </div>
      {typeof response === 'string' ? (
        <p
          className={`pb-4 ${
            response?.includes('Command Not Found.') ||
            (response?.includes('An error ocurred.') && 'text-red-600')
          }`}
        >
          {response}
        </p>
      ) : (
        response
      )}
    </>
  );
}
