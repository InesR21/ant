import React, { useState, useEffect } from "react";

const AntsContext = React.createContext();

const AntsProvider = (props) => {
  const numRamdon = Math.floor(Math.random() * 9e9);
  const probabilityState = {
    0: "Not yet run",
    1: "In progress",
    2: "Calculated",
  };
  const [ants, setAnts] = useState([]);
  const getAnts = async () => {
    try {
      let url = "https://guarded-shore-81814.herokuapp.com/graphql";
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "{ ants { name, length, color, weight } }",
        }),
      });
      let data = await response.json();
      const antsData = getFormatAnts(data?.data?.ants);
      setAnts(antsData);
    } catch (error) {
      setAnts([]);
      console.error(error);
    }
  };
  const getFormatAnts = (antsFormat) => {
    let formatAnts = [];
    antsFormat.forEach((ant) => {
      formatAnts.push({
        id: ant.length * numRamdon,
        name: ant.name,
        length: ant.length,
        color: ant.color.toLowerCase(),
        weight: ant.weight,
        probability: 0,
        probabilityState: probabilityState[0],
        colorState: "#312f2c",
        image: `https://picsum.photos/200/300?random=${ant.length}`,
      });
    });
    return formatAnts;
  };
  const orderAnts = (ants) => {
    let orderedAnts;
    if (ants !== undefined) {
      orderedAnts = ants.sort((a, b) => {
        return b.probability - a.probability;
      });
      return setAnts(orderedAnts);
    }
  };
  function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();
    return (callback) => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }
  const calculateAntProbability = (antProbability) => {
    updateProbabilityState(antProbability, 1);
    let calculateAnts = [];
    const probability = generateAntWinLikelihoodCalculator();
    const callback = (likelihoodOfAntWinning) => {
      ants.forEach((ant) => {
        if (ant.id === antProbability.id) {
          ant.probability = likelihoodOfAntWinning;
          ant.probabilityState = probabilityState[2];
          ant.colorState = "#1e0039";
        }
        calculateAnts.push(ant);
      });
      orderAnts(calculateAnts);
    };
    probability(callback);
  };

  const updateProbabilityState = (antUpdate, State) => {
    let updateAnts = [];
    ants.forEach((ant) => {
      if (ant.id === antUpdate.id) {
        ant.probabilityState = probabilityState[State];
        ant.colorState = "#560CCE";
      }
      updateAnts.push(ant);
    });
    setAnts(updateAnts);
  };

  useEffect(() => {
    getAnts();
    return () => {
      setAnts([]);
    };
  }, []);

  return (
    <AntsContext.Provider
      value={{
        ants,
        calculateAntProbability,
      }}
    >
      {props.children}
    </AntsContext.Provider>
  );
};
export { AntsContext, AntsProvider };
