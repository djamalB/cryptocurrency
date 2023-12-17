import { useCallback, useEffect, useState } from "react";
import { getCoins } from "./api/api";
import Header from "./components/Header/Header";
import { CoinsContext } from "./context/CoinsContext";
import Main from "./pages/main/Main";

function App() {
  const [balance, setBalance] = useState(6000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);

  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000);
  });

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          setCoins={setFilteredCoins}
          coins={coins}
          balance={balance}
          setBalance={addBalance}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  );
}

export default App;
