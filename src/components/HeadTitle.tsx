import { useContext } from 'react';
import Head from 'next/head';
import { CountdownContext } from '../contexts/CountdownContext';
import { formatTime } from '../utils';

export default function HeadTitle() {
  const { isActive, minutes, seconds, hasFinished } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = formatTime(minutes);
  const [secondLeft, secondRight] = formatTime(seconds);

  if (isActive)
    return (
      <Head>
        <title>
          ⏱ Boraa | {minuteLeft}
          {minuteRight}:{secondLeft}
          {secondRight}
        </title>
      </Head>
    );

  if (hasFinished)
    return (
      <Head>
        <title>🍃 Relaxe</title>
      </Head>
    );

  return (
    <div>
      <Head>
        <title>Início | move.it</title>
      </Head>
    </div>
  );
}
