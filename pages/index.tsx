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


const message = "Click to verify status.";
const mistake = "";

const checkList = async () => {
  const arr: string[] = brownList.brownList;
  const arr1: string[] = goldList.goldList;
  const arr2: string[] = platinumList.platinumList;

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

    console.log(found);

    if (found !== undefined) {
      const message = "Congrats! You're on the Brown List!";
      const mistake = "If you believe this to be incorrect, stay calm and reach out to us on Twitter MF.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found1 !== undefined){
      const message = "We like you're style, you're on the Gold List!";
      const mistake = "If you believe this to be incorrect, stay calm and reach out to us on Twitter MF.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else if (found2 !== undefined){
      const message = "Oh wow, look at the Big Shot on Platinum over here!!";
      const mistake = "";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    } else {
      const message = "Unfortunately, you are not on The Brownlist. So go make some memes while there's still time!";
      const mistake = "If you believe this to be incorrect, stay calm and reach out to us on Twitter MF.";
      (document.getElementById('status') as HTMLElement).textContent = message;
      (document.getElementById('mistake') as HTMLElement).textContent = mistake;
    }
};


  return (
    <div className={styles.card}>
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
        <button onClick={connect} className={styles.mainButton}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Home;
