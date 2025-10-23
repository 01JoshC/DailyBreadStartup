import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export function Leaderboard() {
  const [scores, setScores] = React.useState([]);
  const [messageScore, setMessageScore] = React.useState("10");
  const [messageUserName, setMessageUserName] = React.useState("Samuel");

  React.useEffect(() => {
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        setScores(JSON.parse(scoresText));
      }
    }, []);

  function setTopNameAndScore(){
    const names = ["Adam", "Noah", "Enoch", "Job", "Joshua", "Moses", "Obidiah", "David", "Solomon", "Isaiah"];
    const score = Math.floor(Math.random() * 3000);
    const userName = names[Math.floor(Math.random() * names.length)];
    return [score, userName]
  }
  
  setInterval(() => {
      const values = setTopNameAndScore()
      const score = values[0]
      const userName = values[1]
      setMessageUserName(userName)
      setMessageScore(score)
  }, 5000);


  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.xp}</td>
          <td>{score.streak}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  return (
    <main>
    <div className="container-fluid">
    <br />
    <Alert variant="warning" className="mx-auto text-center">User, you are {messageScore}XP from overtaking {messageUserName}!</Alert>
    <br />
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>XP</th>
            <th>Streak</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody> {scoreRows} </tbody>
      </table>
      </div>
    </main>
  );
}