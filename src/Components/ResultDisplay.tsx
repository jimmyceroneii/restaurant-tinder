import React from 'react';
import { styles } from './styles';

type ResultProps = {
  initialList1: Array<string>;
  initialList2: Array<string>;
  list1: Array<string>;
  list2: Array<string>;
  setList1: React.Dispatch<React.SetStateAction<string[]>>;
  setList2: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ResultDisplay: React.FC<ResultProps> = ({
  initialList1,
  initialList2,
  list1,
  list2,
  setList1,
  setList2,
}) => {
  return (
    <div style={styles.card}>
      <p style={styles.choiceText}>
        You have chosen: {list1.length === 0 ? list2[0] : list1[0]}
      </p>
      <button
        style={styles.choiceButton}
        onClick={() => {
          setList1(initialList1);
          setList2(initialList2);
        }}
      >
        Reset
      </button>
    </div>
  );
};
