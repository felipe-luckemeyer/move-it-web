import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';
import { formatTime } from '../utils';

export default function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(
    CountdownContext
  );
  const [minuteLeft, minuteRight] = formatTime(minutes);
  const [secondLeft, secondRight] = formatTime(seconds);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={() => resetCountdown()}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={() => startCountdown()}
            >
              Iniciar um cíclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
