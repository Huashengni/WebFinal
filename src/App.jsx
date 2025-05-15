import { useEffect, useState } from 'react';
import './App.css';

import { db } from '../firebase.ts';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

function App() {
  const [count, setCount] = useState(null);
  const docRef = doc(db, 'buttonCount', 'pressed');

  useEffect(() => {
    const loadCount = async () => {
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setCount(snapshot.data().count || 0);
      } else {
        await setDoc(docRef, { count: 0 });
        setCount(0);
      }
    };

    loadCount();
  }, []);

  const handleClick = async () => {
    if (count === null) return; 
    const newCount = count + 1;
    await updateDoc(docRef, { count: newCount });
    setCount(newCount);
  };

  const handleDelete = async () => {
    await updateDoc(docRef, { count: 0 });
    setCount(0);
  };
  return (
    <div className="app-container">
      <div className="app-content">
        <div className="counter-content">
          <p className="counter-text">
            {count === null
              ? 'Loading...'
              : `This button is pressed ${count} time${count === 1 ? '' : 's'}`}
          </p>
          <div className="button-group">
            <button className="red-button" onClick={handleClick}>
              Click me
            </button>
            <button className="red-button reset-button" onClick={handleDelete}>
              Reset (Delete)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
