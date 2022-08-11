import React, { useMemo, useState } from 'react';
import { Comparison } from './Components/Comparison';
import { ResultDisplay } from './Components/ResultDisplay';
import { randomizeList } from './helpers/listUtils';
import { indianaRestaurants, losAngelesRestaurants } from './restaurantLists';

export const App: React.FC = () => {
  const [randomizedList, setRandomizedList] = useState(
    randomizeList({ list: losAngelesRestaurants })
  );

  const [list1, setList1] = useState(
    randomizedList.slice(
      Math.ceil(randomizedList.length / 2),
      randomizedList.length
    )
  );

  const [list2, setList2] = useState(
    randomizedList.slice(0, Math.ceil(randomizedList.length / 2))
  );

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
          randomizeList={() => {
            setRandomizedList(randomizeList({ list: losAngelesRestaurants }));
            setList1(
              randomizedList.slice(
                Math.ceil(randomizedList.length / 2),
                randomizedList.length
              )
            );
            setList2(
              randomizedList.slice(0, Math.ceil(randomizedList.length / 2))
            );
          }}
          list1={list1}
          list2={list2}
        />
      )}
    </div>
  );
};
