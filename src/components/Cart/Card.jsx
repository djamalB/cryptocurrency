import "./styles.css";
import { WithRuBalance } from "../../helpers/hoc/withRuBalance";

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log({ ruBalance });
  console.log(balance);
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button className="btn" onClick={setBalance}>
          Add money
        </button>
      </div>

      <div className="card-block">
        <p>Djamal Balaev</p>
        <p>{balance}$</p>
      </div>
    </div>
  );
};

export default WithRuBalance(Card);
