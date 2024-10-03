import ReactMarkdown from 'react-markdown';
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
        <ReactMarkdown>{text}</ReactMarkdown>
        {current && <Typer />} 
      </div>
      {response && (
        <div
          className={`pb-4 ${
            typeof response === 'string' &&
            (response.includes('Command Not Found.') || response.includes('An error occurred.'))
              ? 'text-red-600'
              : ''
          }`}
        >
          {typeof response === 'string' ? (
            <ReactMarkdown>{response}</ReactMarkdown>
          ) : (
            response
          )}
        </div>
      )}
    </>
  );
}
