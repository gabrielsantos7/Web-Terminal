import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { Command } from './components/command';
import { Banner } from './components/banner';
import { getCurrentTime, processCommand } from './helper';
import { ICommand } from './models';

export function App() {
  const [inputText, setInputText] = useState('');
  const [commands, setCommands] = useState<ICommand[]>([]);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    text.length <= 50 && setInputText(text);
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      const response = await processCommand(inputText);
      const currentCommand = {
        text: inputText,
        timestamp: currentTime,
        response,
      };

      setCommands([...commands, currentCommand]);
      setInputText('');
      setCurrentTime(getCurrentTime());
    }
  };

  const textareaFocus = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  return (
    <>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        ref={textAreaRef}
        className="absolute -top-96"
        autoFocus
      />

      <div className="w-full min-h-screen bg-main-purple p-4 text-lg font-semibold text-neutral-50">
        <Banner />
        {commands.map((command) => (
          <Command
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
      </div>
    </>
  );
}
