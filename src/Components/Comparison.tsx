import React from 'react';
import { Card } from './Card';
import { styles } from './styles';

type ComparisonProps = {
  list1: Array<string>;
  list2: Array<string>;
  setList1: React.Dispatch<React.SetStateAction<string[]>>;
  setList2: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Comparison: React.FC<ComparisonProps> = ({
  list1,
  list2,
  setList1,
  setList2,
}) => {
  return (
    <div style={styles.cardContainer}>
      <Card
        onClick={() => setList2(list2.slice(1, list2.length))}
        item={list1[0]}
      />
      <Card
        onClick={() => setList1(list1.slice(1, list1.length))}
        item={list2[0]}
      />
    </div>
  );
};
