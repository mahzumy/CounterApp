import { useEffect, useState } from 'react';

export default function Page() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setCounter(1);
  }, []);
  return (
    <div>
      <div>{counter}</div>
      <div>{counter}</div>
    </div>
  );
}
