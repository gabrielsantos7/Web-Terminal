import { IUsernameProps } from '../models';

export function Username({ timestamp }: IUsernameProps) {
  return (
    <>
      <span className="pr-2">{timestamp}</span>
      <span className="text-main-green">visitor@terminal.com</span>:
      <span className="text-main-blue font-black">~</span>
      <span className="pr-3">$</span>
    </>
  );
}
