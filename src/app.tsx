import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Command } from './components/command';
import { Banner } from './components/banner';
import { getCurrentTime, processCommand } from './helpers';
import { ICommand, Mode, Response } from './models';

export function App() {
  const [inputText, setInputText] = useState('');
  const [commands, setCommands] = useState<ICommand[]>([]);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [mode, setMode] = useState<Mode>('command');

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    text.length <= 60 && setInputText(text);
  };

  const handleModeChange = (newMode: string) => {
    if (newMode !== 'command' && newMode !== 'action') {
      return `Invalid mode: '${newMode}'. Available modes are 'command' and 'action'.`;
    }
    setMode(newMode as Mode);
    return `Mode changed to: ${newMode}`;
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter') return;

    let response: Response = '';

    if (inputText === 'clear') {
      setInputText('');
      setCommands([]);
      return;
    } else if (inputText === 'history') {
      response = (
        <div>
          {commands.filter((command) => command.text !== 'history').map((command) => (
            <p>{command.text}</p>
          ))}
        </div>
      );
    } else if (inputText.startsWith('mode ')) {
      const newMode = inputText.split(' ')[1];
      response = handleModeChange(newMode);
    } else {
      response = await processCommand(inputText, mode);
    }

    const currentCommand: ICommand = {
      text: inputText,
      timestamp: currentTime,
      response,
    };

    setCommands([...commands, currentCommand]);
    setInputText('');
    setCurrentTime(getCurrentTime());
  };

  const textareaFocus = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: document.body.offsetHeight });
    textAreaRef.current;
  }, [commands]);

  return (
    <>
      <div className="w-full min-h-screen bg-main-purple p-4 text-lg font-semibold text-neutral-50">
        <p className="text-main-yellow">
          Web Terminal project © {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <Banner />
        <div className="pb-4 text-main-yellow">
          <p>Welcome to Linux Interactive Web Terminal.</p>
          <p>
            For a list of available commands, type{' '}
            <span className="text-main-green">'help'</span>.
          </p>
        </div>

        {commands.map((command, index) => (
          <Command
            key={index}
            text={command.text}
            timestamp={command.timestamp}
            response={command.response}
          />
        ))}
        {/* TODO: Move cursor in arrow press */}
        <Command
          text={inputText}
          timestamp={currentTime}
          current
          handleClick={textareaFocus}
        />
      </div>

      <textarea
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        ref={textAreaRef}
        className="fixed bottom-0 -left-96"
        autoFocus
      />
    </>
  );
}
