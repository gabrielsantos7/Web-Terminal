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
  const [isLoading, setIsLoading] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setInputText(text);
  };

  const handleModeChange = (newMode: string) => {
    setMode(newMode as Mode);
    return `Mode changed to: ${newMode}`;
  };

  const normalizeInput = (input: string) => {
    return input.trim().toLowerCase();
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter') return;

    const normalizedInput = normalizeInput(inputText);
    if (normalizedInput === '') return;

    setIsLoading(true);

    let response: Response = '';

    if (normalizedInput === 'clear') {
      setInputText('');
      setCommands([]);
      setShowBanner(false);
      setIsLoading(false);
      return;
    } else if (normalizedInput === 'history') {
      response = (
        <div>
          {commands
            .filter((command) => command.text !== 'history')
            .map((command, index) => (
              <p key={index}>{command.text}</p>
            ))}
        </div>
      );
    } else if (normalizedInput === 'toggle mode') {
      const newMode = mode === 'action' ? 'command' : 'action';
      response = handleModeChange(newMode);
    } else {
      response = await processCommand(normalizedInput, mode);
    }

    const currentCommand: ICommand = {
      text: inputText,
      timestamp: currentTime,
      response,
    };

    setCommands([...commands, currentCommand]);
    setInputText('');
    setCurrentTime(getCurrentTime());
    setIsLoading(false);
  };

  const textareaFocus = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: document.body.offsetHeight });
  }, [commands]);

  return (
    <>
      <div className="w-full min-h-screen bg-main-purple p-4 text-lg font-semibold text-neutral-50">
        {showBanner && (
          <>
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
          </>
        )}

        {commands.map((command, index) => (
          <Command
            key={index}
            text={command.text}
            timestamp={command.timestamp}
            response={command.response}
          />
        ))}

        <Command
          text={inputText}
          timestamp={currentTime}
          current
          handleClick={textareaFocus}
        />

        {isLoading && <p>Loading...</p>}
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
