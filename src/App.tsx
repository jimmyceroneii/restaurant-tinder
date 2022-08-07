import React, { useState } from 'react';
import { Card } from './Card/Card';
import { indianaRestaurants } from './restaurantLists';
import { styles } from './styles';

export const App = () => {
  const initialList1 = indianaRestaurants.slice(
    0,
    Math.ceil(indianaRestaurants.length / 2)
  );

  const initialList2 = indianaRestaurants.slice(
    Math.ceil(indianaRestaurants.length / 2),
    indianaRestaurants.length
  );

  const [list1, setList1] = useState(initialList1);

  const [list2, setList2] = useState(initialList2);

  return (
    <div>
      {list1.length > 0 && list2.length > 0 ? (
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
      ) : (
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
      )}
    </div>
  );
};
