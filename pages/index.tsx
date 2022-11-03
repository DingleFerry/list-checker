import { useAddress, useDisconnect, useUser, useLogin, useLogout, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import styles from "../styles/Home.module.css";
import brownList from "../public/lists.json"

const Home: NextPage = () => {
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();


const message = "Click to verify status.";

const checkList = async () => {
  const arr: string[] = ["0xF6255DF3fC84a0Fd682371F366a70e365E90f7Eb"];
  const arr1: string[] = ["0x278920977CDF6a6EC22B287142511dd7fB620245"];
  const arr2: string[] = ["0xA3e4E4da0f8D272EE960647F509C9d4Ee9e81698"];

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
      const message = "Congrats! You're on the Brown List! You have 1 free mint."
      console.log('brown', message);
      (document.getElementById('status') as HTMLElement).textContent = message;
    } else if (found1 !== undefined){
      const message = "We like you're style MF, you're on the Gold List! You have 3 free mints, fancy boy!"
      console.log('gold', message);
      (document.getElementById('status') as HTMLElement).textContent = message;
    } else if (found2 !== undefined){
      const message = "Oh wow, look at you Mr. Big Shot on Platinum over here!! You have 5 free mints!"
      console.log('platinum', message);
      (document.getElementById('status') as HTMLElement).textContent = message;
    } else {
      const message = "Unfortunately, you are not on Brown, Gold, or Platinum. You have 0 free mints. So, go make some memes MF!"
      console.log('none', message);
      (document.getElementById('status') as HTMLElement).textContent = message;
    }
};


  return (
    <div className={styles.card}>
      {address ? (
        <>
          <p id="status" className={styles.message}>{message}</p>
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
