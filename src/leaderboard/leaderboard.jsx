import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

export function Leaderboard() {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Obadiah</td>
            <td>34</td>
            <td>3</td>
            <td>May 20, 2021</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Moses</td>
            <td>29</td>
            <td>2</td>
            <td>June 2, 2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Noah</td>
            <td>7</td>
            <td>1</td>
            <td>July 3, 2020</td>
          </tr>
        </tbody>
      </table>
      </div>
    </main>
  );
}