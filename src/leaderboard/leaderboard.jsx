import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Leaderboard(props) {
  const [streaks, setStreaks] = React.useState([]);
  const [userStreak, setUserStreak] = React.useState("loading...")
  const userName = props.userName;

  React.useEffect(() => {
    //get the high streaks for the table
    fetch('http://localhost:4000/api/streaks')
    .then((response) => response.json())
    .then((db_streaks) => {
      setStreaks(db_streaks);
    });

    //get the user streak
    const params = new URLSearchParams({email: userName})
    //fetch("https://startup.dailybread.click/api/streak", {
    fetch(`http://localhost:4000/api/streak/?${params}`)
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
          <td>{streak.email.split('@')[0]}</td>
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
        <tbody>{streakRows}</tbody>
      </table>
      </div>
    </main>
  );
}