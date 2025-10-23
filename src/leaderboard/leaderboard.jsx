import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export function Leaderboard() {
  const [scores, setScores] = React.useState([]);

  React.useEffect(() => {
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        setScores(JSON.parse(scoresText));
      }
    }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
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
    <Alert variant="warning" className="mx-auto text-center">User, you are 10XP from overtaking Moses!</Alert>
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