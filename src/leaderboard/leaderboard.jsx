import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export function Leaderboard() {
  const [streaks, setStreaks] = React.useState([]);
  const [userStreak, setUserStreak] = React.useState("Loading...")

  React.useEffect(() => {
    //get the high streaks for the table
    fetch('/api/streak')
    .then((response) => response.json())
    .then((streaks) => {
      setStreaks(streaks);
    });

    //get the user streak
    fetch("https://startup.dailybread.click/api/streak", {
      method: 'get', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: userName
    })})
    .then((response) => response.json())
    .then((data) => {
      setUserStreak(data.streak)
    })
  }, []);

  const streakRows = [];
  if (streaks.length) {
    for (const [i, streak] of streaks.entries()) {
      streakRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{streak.name.split('@')[0]}</td>
          <td>{streak.streak}</td>
        </tr>
      );
    }
  } else {
    streakRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to build your streak</td>
      </tr>
    );
  }

  return (
    <main>
    <div className="container-fluid">

    <h3>Your streak is: {userStreak}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody> {streakRows} </tbody>
      </table>
      </div>
    </main>
  );
}