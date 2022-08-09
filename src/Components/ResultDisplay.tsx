import React from 'react';
import { styles } from './styles';

type ResultProps = {
  randomizeList: () => void;
  list1: Array<string>;
  list2: Array<string>;
};

export const ResultDisplay: React.FC<ResultProps> = ({
  randomizeList,
  list1,
  list2,
}) => {
  return (
    <div style={styles.card}>
      <p style={styles.choiceText}>
        You have chosen: {list1.length === 0 ? list2[0] : list1[0]}
      </p>
      <button style={styles.choiceButton} onClick={randomizeList}>
        Reset
      </button>
    </div>
  );
};
