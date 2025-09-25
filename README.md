# DailyBread

## Elevator Pitch  
Studying the Bible every day isn’t always easy. That’s why we created **DailBread**—a web application designed to help users grow spiritually through consistent scripture study. DailyBread motivates daily reading with a streak counter, leaderboards, league advancement, and other engaging gamified features. Think of it as the **“Duolingo” for the Bible**—making scripture study rewarding, interactive, and spiritually uplifting.  

## Key Features  
- Streak Counter  
- Leaderboard  
- League Advancement  
- Login, Logout, and Register  
- See High Scores  
- Notifications (e.g., daily reminders, league advancement status)  

## Technologies  
I am going to use the required technologies in the following ways:  

- **HTML** – Basic structural and organizational elements of each web page, login/register controls, about page.  
- **CSS** – Styling and animating the application, including button highlighting.  
- **React** – Single-page view for scripture reading, rendering leaderboard, league status, and streak counter. State hooks.  
- **Service** – Endpoints for authentication, storing/retrieving scores, API call for Bible text.  
- **Database** – Stores streak counter scores, user information, leaderboards, login information, etc.  
- **WebSocket** – Sending reminder notifications.  

## Application Design  

![Alt text](IMG_7154.jpg)

## Notes
I have decided to change the name of the application from "BiblePower" to "DailyBread" to better reflect its purpose. The new name emphasizes daily scripture study and aligns well with the application's goal of helping users grow spiritually through consistent engagement with the Bible.

I decided to base large amount of my code off of the Simon game code provided in class. This general layout and structure is very similar to what I want for my application, so it made sense to adapt it for my needs.

I also have decided to remove the registered trademark symbol (®) from the application name "DailyBread" as it is not necessary for our non-commercial, educational project. This change simplifies the branding and avoids any potential legal implications associated with trademark usage.

I have added a relevant Bible verse (Joshua 1:8) to the about page to inspire users and reinforce the spiritual purpose of the application. This addition aims to motivate users to engage with the app and emphasizes the importance of daily scripture study.

I changed some basic elements such as the leaderboard, added a different image, changes the scriptures, and added a notification to the leaderboard page to inform users of their progress towards overtaking the next user on the leaderboard. This enhances user engagement and encourages friendly competition, and also would be implemented using a web socket to provide real-time updates.

The actualy bible text will be retrieved using an API call to a free Bible API, such as the Bible API (https://bible-api.com/). This allows users to read scripture directly within the application without needing to store the text locally.





