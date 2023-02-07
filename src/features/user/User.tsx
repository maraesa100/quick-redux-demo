import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  updateProfileUrl,
  selectProfileUrl,
} from './userSlice';

export function User() {
  const url = useAppSelector(selectProfileUrl);
  const dispatch = useAppDispatch();
  const [currentUrl, setCurrentUrl] = useState('');

  // TASKS:

  // 1. All the user to change their name


  return (
    <div>
      <div >
        <h2>My name is: Jason Manzoukas</h2>
        <p>change profile photo:</p>
        <input
          aria-label="Set profile photo"
          value={currentUrl}
          onChange={(e) => setCurrentUrl(e.target.value)}
        />

        <button
          onClick={() => dispatch(updateProfileUrl(currentUrl))}
        >
          Change profile photo
        </button>
      </div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>
        <img src={url} alt="" style={{width: "300px", height: "300px"}} />

        {/* <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button> */}

      </div>
    </div>
  );
}
