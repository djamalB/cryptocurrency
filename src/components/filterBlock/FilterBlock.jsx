import { useEffect, useState,useContext } from "react";
import "./styles.css";
import React from "react";
import { CoinsContext } from "../../context/CoinsContext";

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const [value, setValue] = useState("");

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value);
    });
    setCoins(filteredCoins);
  }, [value]);

  return (
    <div className="filter-block">
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default React.memo(FilterBlock);
