import React from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';

export function Read_c(props) {
  const [displayText, setDisplayText] = React.useState([]);
  const [displayChapter, setDisplayChapter] = React.useState('');
  const [displayBook, setDisplayBook] = React.useState('');
  const userName = props.userName;

  //reformats api return object to be just verses
  function getVerses(chapter_data) {
    const verses = [];
    for (let i = 0; i < chapter_data["data"].length; i++) {
      verses.push(chapter_data["data"][i]["text"])
    }
    return verses  
  }

  //our third-part api call
  function getText(book, chapter){
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-kjv/books/${book}/chapters/${chapter}.json`
    )
      .then((response) => response.json())
      .then((data) => setDisplayText(getVerses(data)));
  }

  React.useEffect(() => {
    // fetch("https://startup.dailybread.click/api/progress")    
    fetch("http://localhost:4000/api/progress")
    .then((response) => response.json())
    .then((data) => {
      setDisplayBook(data["book"])
      setDisplayChapter(parseInt(data["chapter"]))
      getText(data["book"], data["chapter"])

    GameNotifier.broadcastEvent(userName, GameEvent.Start, `${data["book"]} ${data["chapter"]}`);
    })}, []);

  //this is what enables the "next" button to work
  function increment(){ 
    const bibleChapterCounts = {
        // Old Testament
        "genesis": 50,
        "exodus": 40,
        "leviticus": 27,
        "numbers": 36,
        "deuteronomy": 34,
        "joshua": 24,
        "judges": 21,
        "ruth": 4,
        "1 samuel": 31,
        "2 samuel": 24,
        "1 kings": 22,
        "2 kings": 25,
        "1 chronicles": 29,
        "2 chronicles": 36,
        "ezra": 10,
        "nehemiah": 13,
        "esther": 10,
        "job": 42,
        "psalms": 150,
        "proverbs": 31,
        "ecclesiastes": 12,
        "song of solomon": 8,
        "isaiah": 66,
        "jeremiah": 52,
        "lamentations": 5,
        "ezekiel": 48,
        "daniel": 12,
        "hosea": 14,
        "joel": 3,
        "amos": 9,
        "obadiah": 1,
        "jonah": 4,
        "micah": 7,
        "nahum": 3,
        "habakkuk": 3,
        "zephaniah": 3,
        "haggai": 2,
        "zechariah": 14,
        "malachi": 4,
        
        // New Testament
        "matthew": 28,
        "mark": 16,
        "luke": 24,
        "john": 21,
        "acts": 28,
        "romans": 16,
        "1 corinthians": 16,
        "2 corinthians": 13,
        "galatians": 6,
        "ephesians": 6,
        "philippians": 4,
        "colossians": 4,
        "1 thessalonians": 5,
        "2 thessalonians": 3,
        "1 timothy": 6,
        "2 timothy": 4,
        "titus": 3,
        "philemon": 1,
        "hebrews": 13,
        "james": 5,
        "1 peter": 5,
        "2 peter": 3,
        "1 john": 5,
        "2 john": 1,
        "3 john": 1,
        "jude": 1,
        "revelation": 22
    };

    const bibleBooks = [
      // Old Testament
      "Genesis",
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges",
      "Ruth",
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "2 Chronicles",
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job",
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "Song of Solomon",
      "Isaiah",
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Daniel",
      "Hosea",
      "Joel",
      "Amos",
      "Obadiah",
      "Jonah",
      "Micah",
      "Nahum",
      "Habakkuk",
      "Zephaniah",
      "Haggai",
      "Zechariah",
      "Malachi",
      
      // New Testament
      "Matthew",
      "Mark",
      "Luke",
      "John",
      "Acts",
      "Romans",
      "1 Corinthians",
      "2 Corinthians",
      "Galatians",
      "Ephesians",
      "Philippians",
      "Colossians",
      "1 Thessalonians",
      "2 Thessalonians",
      "1 Timothy",
      "2 Timothy",
      "Titus",
      "Philemon",
      "Hebrews",
      "James",
      "1 Peter",
      "2 Peter",
      "1 John",
      "2 John",
      "3 John",
      "Jude",
      "Revelation"
    ];

    setDisplayChapter(displayChapter+1)
    
    if (displayChapter > bibleChapterCounts[displayBook]){
      for (let i = 0; i < bibleBooks.length; i++){
        if (bibleBooks[i] == displayBook){
          setDisplayBook(bibleBooks[i+1])
          break
        }
      }
      setDisplayChapter(1)
    }
    
    getText(displayBook, displayChapter)

    fetch("http://localhost:4000/api/progress", {
      method: 'post', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        book: displayBook,
        chapter: displayChapter
      })})
      .then(response => response.json())
      .then(data => {
      console.log(data);

      GameNotifier.broadcastEvent(userName, GameEvent.Finished, `${displayBook} ${displayChapter}`);
    })
  }

  //component html
  return (
     <main>
      <div className="container-fluid px-7">
        <h1><strong>{displayBook.toUpperCase()} {displayChapter}</strong></h1>
        <ol>
          {displayText.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ol>
      </div>
    <button type="button" class="btn btn-secondary" onClick={() => increment()}>Next Chapter &#10145;</button>
    </main>
  );
}