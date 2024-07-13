export function Banner() {
  return (
    <div className="pb-4">
      <p className='text-main-yellow'>
        Web Terminal project © {new Date().getFullYear()}. All rights reserved.
      </p>

      <pre className="leading-none"> {` `}
        _____       _          _      _    _____             _  <br/>{` `}          
       / ____|     | |        (_)    | |  / ____|           | |  <br/>         
      | |  __  __ _| |__  _ __ _  ___| | | (___   __ _ _ __ | |_ ___  ___ <br/> 
      | | |_ |/ _` | '_ \| '__| |/ _ \ |  \___ \ / _` | '_ \| __/ _ \/ __|<br/> 
      | |__| | (_| | |_) | |  | |  __/ |  ____) | (_| | | | | || (_) \__ \<br/>{` `} 
       \_____|\__,_|_.__/|_|  |_|\___|_| |_____/ \__,_|_| |_|\__\___/|___/<br/> 
      </pre>

      <div className="pt-4 text-main-yellow">
      <p>Welcome to Linux Interactive Web Terminal.</p>
      <p>For a list of available commands, type <span className='text-main-green'>'help'</span>.</p>
      </div>
    </div>
  );
}
