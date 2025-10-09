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

## AWS Deliverable
For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.
  - [x] **Server deployed and accessible with custom domain name** - [My server link](https://dailybread.click).

## 🚀 HTML deliverable
For this deliverable I did the following. I checked the box [x] and added a description for things I completed.

  - [x] HTML pages - Four different pages. One for each view. index.html (Login), read.html, leaderboard.html, and about.html.
  - [x] Proper HTML element usage - I spent a lot of time learning about elements. I used header, footer, main, nav, img, a, input, button, form, and many more.
  - [x] Links - Links between views.
  - [x] Text - About page has text.
  - [x] 3rd party API placeholder - the read page will fetch bible text from a free bible API.
  - [x] Images - Image of a bible is displayed on the about page.
  - [x] Login placeholder - Placeholder for auth on the login page.
  - [x] DB data placeholder - High scores displayed on scores page.
  - [x] WebSocket placeholder - The play page has a text area that will show what 

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - I used bootstreap to make the nav bar much more appealing with the links right aligned and the logo built into it. 
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices. I wish I could have done a little more with this, but I am happy with how it turned out.
- [x] **Application elements** - I used the boostrap theme, and am happy with how the colors turned out. I added a table and used the table alert class and card class for styling. I also added styling to the form elements and relavent buttons. 
- [x] **Application text content** - Consistent fonts. Again, this comes from the boostrap themes. 
- [x] **Application images** - I centered and rounded the image on the about page. I think it looks nice. 

## React deliverable
- [x] **Bundled using Vite** Vite is installed in my project and I am using it to bundle my React code.
- [x] **Multiple React components** My leaderboard, login, about, and read pages are delivered using React. This is clealry visible in the project URL where the .html extension is absent. I changed several componets to use React bootstrap components.
- [x] **React router** I am using React Router to handle navigation between the different views.






