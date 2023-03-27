import React from 'react';
import styles from './Blah.module.css';

function TopBanner({ saying }: any) {
  return (
    <>
      <div className="">
        <br />
        <div className={styles.div}>
          <img src="./Hilton.jpg" alt="logo" />
        </div>
        <div className="align-center">
          <br />
          <h1 className={styles.h1}>{saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
