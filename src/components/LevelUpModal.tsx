import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpProps {
  close: () => void;
}

export default function LevelUpModal(props: LevelUpProps) {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <motion.div
        initial={{
          opacity: 0,
          y: 800,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 700 }}
        className={styles.container}
      >
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={() => props.close()}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </motion.div>
    </div>
  );
}
