import React from 'react';

function increment(){
  localStorage.set(currentChapter, parseInt(localStorage.get(currentChapter))+1)
  setDisplayBook(localStorage.getItem(currentBook))
  setDisplayChapter(localStorage.getItem(currentChapter))
  setDisplayText("Congratulations! You have clicked the next button.")
}

export function Read() {
  const [displayText, setDisplayText] = React.useState('');
  const [displayChapter, setDisplayChapter] = React.useState('');
  const [displayBook, setDisplayBook] = React.useState('');

  //database pretending
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