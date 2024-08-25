const generateRandomHeight = () => Math.floor(Math.random() * 3) + 1;
const generateRandowSpacing = () => Math.floor(Math.random() * 30) + 5;

export function Crash() {
  return (
    <div className="crashed-screen fixed inset-0 z-50">
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          className="w-full bg-white"
          style={{
            height: `${generateRandomHeight()}px`,
            marginTop: `${generateRandowSpacing()}px`,
          }}
        />
      ))}
    </div>
  );
}
