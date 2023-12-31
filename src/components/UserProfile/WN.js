import React, { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "../FirebaseApp/FirebaseApp";
import { useContext } from "react";
import { WinnerContext } from "../Winner-context";

function WN() {
  const [databaseError, setDatabaseError] = useState(null);
  const [wnValue, setWNValue] = useState(null);
  const winner = useContext(WinnerContext);
  console.log(winner);

  useEffect(() => {
    if (winner) {
      // If there's a winner, update their WN in the Firebase Realtime Database

      const db = getDatabase(app);
      const userRef = ref(db, `WinsNumber/${winner}/WN`); // Reference to the winner's WN

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Set the fetched WN value in state
            setWNValue(snapshot.val());
            setDatabaseError(null); // Clear any previous errors
          } else {
            // Handle the case where the user's document doesn't exist
            console.error("User document not found");
            setDatabaseError("User document not found");
          }
        })
        .catch((error) => {
          console.error(
            "Error fetching WN from Firebase Realtime Database:",
            error
          );
          setDatabaseError(error.message); // Set the error message
        });
    }
  }, [winner]);

  return (
    <div>
      {databaseError && <p>Error: {databaseError}</p>}
      {<p>0000{wnValue}</p>}
    </div>
  );
}

export default WN;
