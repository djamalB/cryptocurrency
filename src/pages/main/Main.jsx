import { useMemo } from "react";
import Card from "../../components/Cart/Card";
import CoinsList from "../../components/coinsList/CoinsList";
import FilterBlock from "../../components/filterBlock/FilterBlock";
import styles from "./styles.module.css";

const Main = ({ balance, setBalance, coins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
