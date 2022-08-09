import React from 'react';
import { styles } from './styles';

type CardProps = {
  onClick: () => void;
  item: string;
};

export const Card: React.FC<CardProps> = ({ onClick, item }) => {
  return (
    <div style={styles.card}>
      <button style={styles.choiceButton} onClick={onClick}>
        <p style={styles.choiceText}>{item}</p>
      </button>
    </div>
  );
};
