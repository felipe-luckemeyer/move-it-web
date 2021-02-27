import { useContext } from 'react';
import Head from 'next/head';
import { CountdownContext } from '../contexts/CountdownContext';
import { formatTime } from '../utils';

export default function HeadTitle() {
  const { isActive, minutes, seconds, hasFinished } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = formatTime(minutes);
  const [secondLeft, secondRight] = formatTime(seconds);
  const time = `${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`;

  if (isActive)
    return (
      <Head>
        <title>⏱ Bora produzir | {time}</title>
      </Head>
    );

  if (hasFinished)
    return (
      <Head>
        <title>🍃 Relaxe e faça seu desafio </title>
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
