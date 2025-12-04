import React from 'react';

export function Read() {
  const [displayText, setDisplayText] = React.useState('');
  const [displayChapter, setDisplayChapter] = React.useState('');
  const [displayBook, setDisplayBook] = React.useState('');

  //database pretending
  function getText(book, chapter){
    fetch(
      `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${book}/chapters/${chapter}/verses/1.json`
    )
      .then((response) => response.json())
      .then((data) => console.log(data.text));
  }


  const currentChapter = "currentChapter";
  const currentBook = "currentBook";

  React.useEffect(() => {
    if (!localStorage.getItem(currentChapter)){
      localStorage.setItem(currentChapter, "1")
      }

    if (!localStorage.getItem(currentBook)){
      localStorage.setItem(currentBook, "Genesis")
      }

    setDisplayBook(localStorage.getItem(currentBook))
    setDisplayChapter(localStorage.getItem(currentChapter))
    setDisplayText("1 In the beginning God created the heaven and the earth.")
    }, []);

  function increment(){ 

    const bibleChapterCounts = {
  // Old Testament
  "Genesis": 50,
  "Exodus": 40,
  "Leviticus": 27,
  "Numbers": 36,
  "Deuteronomy": 34,
  "Joshua": 24,
  "Judges": 21,
  "Ruth": 4,
  "1 Samuel": 31,
  "2 Samuel": 24,
  "1 Kings": 22,
  "2 Kings": 25,
  "1 Chronicles": 29,
  "2 Chronicles": 36,
  "Ezra": 10,
  "Nehemiah": 13,
  "Esther": 10,
  "Job": 42,
  "Psalms": 150,
  "Proverbs": 31,
  "Ecclesiastes": 12,
  "Song of Solomon": 8,
  "Isaiah": 66,
  "Jeremiah": 52,
  "Lamentations": 5,
  "Ezekiel": 48,
  "Daniel": 12,
  "Hosea": 14,
  "Joel": 3,
  "Amos": 9,
  "Obadiah": 1,
  "Jonah": 4,
  "Micah": 7,
  "Nahum": 3,
  "Habakkuk": 3,
  "Zephaniah": 3,
  "Haggai": 2,
  "Zechariah": 14,
  "Malachi": 4,
  
  // New Testament
  "Matthew": 28,
  "Mark": 16,
  "Luke": 24,
  "John": 21,
  "Acts": 28,
  "Romans": 16,
  "1 Corinthians": 16,
  "2 Corinthians": 13,
  "Galatians": 6,
  "Ephesians": 6,
  "Philippians": 4,
  "Colossians": 4,
  "1 Thessalonians": 5,
  "2 Thessalonians": 3,
  "1 Timothy": 6,
  "2 Timothy": 4,
  "Titus": 3,
  "Philemon": 1,
  "Hebrews": 13,
  "James": 5,
  "1 Peter": 5,
  "2 Peter": 3,
  "1 John": 5,
  "2 John": 1,
  "3 John": 1,
  "Jude": 1,
  "Revelation": 22
};

    setDisplayChapter(displayChapter+1)
    setDisplayBook(displayBook+1)
   

    setDisplayText(getText(displayBook, displayChapter))
  }


  return (
     <main>
      <div className="container-fluid px-7">
        <h1>{displayBook} {displayChapter}</h1>
        <p>{displayText}</p>
      </div>
    <button type="button" class="btn btn-secondary" onClick={() => increment()}>Next Chapter &#10145;</button>
    </main>
  );
}