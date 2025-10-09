import React from 'react';

export function About() {
  return (
    <main>
        <div className="container-fluid px-5">
            <div id="picture" className="picture-box">
            <img 
                width="400px" 
                className="img-fluid rounded mx-auto d-block" 
                src="open_bible.jpeg" 
                alt="random" 
            />
            </div>
                <p>Studying the Bible every day isn’t always easy. That’s why we created DailyBread—a web application designed to help users grow spiritually through consistent scripture study. DailyBread motivates daily reading with a streak counter, leaderboards, league advancement, and other engaging gamified features. Think of it as the “Duolingo” for the Bible—making scripture study rewarding, interactive, and spiritually uplifting. </p>

            <div id="quote">
            <div>
                “This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.”
            </div>
            <div>- Joshua 1:8</div>
            </div>
        </div>
    </main>
  );
}