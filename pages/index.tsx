import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import styles from "../styles/Home.module.css";
import brownList from "../public/brownList.json";
import goldList from "../public/goldList.json";
import platinumList from "../public/platinumList.json"

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const bList = brownList.brownList;
  const gList = goldList.goldList;
  const pList = platinumList.platinumList;


const message = "Click to verify status.";
const mistake = "";

let bListTotal = bList.length;
let gListTotal = gList.length;
let pListTotal = pList.length;

const checkList = async () => {
  const arr: string[] = bList;
  const arr1: string[] = gList;
  const arr2: string[] = pList;

  const str = address?.toString();

    const found = arr.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const found1 = arr1.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    const found2 = arr2.find((element) => {
      return element.toLocaleLowerCase() === str?.toLowerCase();
    });

    console.log(bListTotal, gListTotal, pListTotal);

    if (found !== undefined) {
      const message = "Congrats! You're on the Brown List!";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found1 !== undefined){
      const message = "We like your style MF, you're on the Gold List!";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found2 !== undefined){
      const message = "Oh wow, look at the MF'n Big Shot on Platinum over here!!";
      const mistake = "";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else {
      const message = "Unfortunately, you are not on The Brownlist. So go make some memes while there's still time!";
      const mistake = "If you believe this to be incorrect, stay calm MF and reach out to us on Twitter.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    }
};


  return (
    <div className={styles.card}>
      <div className={styles.counter1}>
        <h1 className={styles.counter}>Brown: {bListTotal}
          <span className={styles.goldCounter}> Gold: {gListTotal}</span>
          <span className={styles.platCounter}> Platinum: {pListTotal}</span>
        </h1>
      </div>
      <div className={styles.counter2}>
        <h1 className={styles.counter} id={styles.platCounter}> Platinum: {pListTotal}</h1>
        <h1 className={styles.counter} id={styles.goldCounter}> Gold: {gListTotal}</h1>
        <h1 className={styles.counter}>Brown: {bListTotal}</h1>
      </div>
      {address ? (
        <>
          <p id="status" className={styles.message}>{message}</p>
          <p id="mistake" className={styles.mistake}>{mistake}</p>
          {/* <pre>User: {JSON.stringify(user || null)}</pre> */}
          {/* <button onClick={getSecret}>Get Secret</button> */}
          <button onClick={checkList} className={styles.mainButton}>Which list am I on?</button>
          <button onClick={disconnect} className={styles.altButton} id="disconnect">Disconnect Wallet</button>
          {/* <pre>Secret: {JSON.stringify(secret || null)}</pre> */}
        </>
      ) : (
        <button onClick={connect} className={styles.mainButton} id={styles.connectBtn}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;
