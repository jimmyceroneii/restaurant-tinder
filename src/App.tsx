import React, { useState } from 'react';
import { Comparison } from './Components/Comparison';
import { ResultDisplay } from './Components/ResultDisplay';
import { indianaRestaurants } from './restaurantLists';

export const App: React.FC = () => {
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
        <Comparison
          list1={list1}
          list2={list2}
          setList1={setList1}
          setList2={setList2}
        />
      ) : (
        <ResultDisplay
          initialList1={initialList1}
          initialList2={initialList2}
          list1={list1}
          list2={list2}
          setList1={setList1}
          setList2={setList2}
        />
      )}
    </div>
  );
};
