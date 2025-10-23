# Web Dev & Systems Study Guide (with examples)

## In the following code, what does the `<link>` element do?

* The HTML `<link>` element **associates external resources** with the document, most commonly **CSS stylesheets** or **icons**.
* It goes in `<head>`.
* Common uses:

  ```html
  <!-- Attach a stylesheet -->
  <link rel="stylesheet" href="/styles.css">

  <!-- Favicon / site icon -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  ```
* It’s **void** (no closing tag) and has no visual content.

---

## In the following code, what does a `<div>` tag do?

* `<div>` is a **generic block-level container** used to group content for styling and layout.
* It has **no semantic meaning** by default (unlike `<header>`, `<nav>`, `<main>`, etc.).
* Typical use:

  ```html
  <div class="card">
    <h3>Title</h3>
    <p>Body text…</p>
  </div>
  ```

---

## In the following code, what is the difference between the `#title` and `.grid` selector?

* `#title` selects an element by **ID** (unique):

  ```html
  <h1 id="title">Hello</h1>
  /* CSS */ #title { color: blue; }
  ```
* `.grid` selects **any element(s)** with class `grid` (many allowed):

  ```html
  <section class="grid">…</section>
  /* CSS */ .grid { display: grid; gap: 1rem; }
  ```
* **Specificity:** `#id` > `.class` > element selector.

---

## In the following code, what is the difference between padding and margin?

* **Padding:** space **inside** the element’s border, around its content.
* **Margin:** space **outside** the element’s border, separating it from siblings.
* Visual order (inside → out): **content → padding → border → margin**.

---

## Given this HTML and this CSS, how will the images be displayed using flex?

Without the exact code, typical behavior is:

* Container:

  ```css
  .gallery {
    display: flex;          /* images become flex items in a row */
    flex-wrap: wrap;        /* if set, items wrap to next line */
    gap: 1rem;              /* space between items */
    justify-content: center;/* horizontal alignment of items on main axis */
    align-items: center;    /* cross-axis alignment */
  }
  .gallery img {
    max-width: 100%;
    height: auto;
    flex: 0 1 200px;        /* allow images to shrink/grow with a base width */
  }
  ```
* Effects:

  * **Row by default**, wrapping if `flex-wrap: wrap`.
  * Spacing via `gap`.
  * Alignment via `justify-content` / `align-items`.
  * Images scale if given flex-basis or width constraints.

---

## What does the following padding CSS do?

Common shorthands:

* `padding: 16px;` → all four sides 16px.
* `padding: 10px 20px;` → top/bottom 10px, left/right 20px.
* `padding: 5px 10px 15px;` → top 5, left/right 10, bottom 15.
* `padding: 5px 10px 15px 0;` → **top 5, right 10, bottom 15, left 0** (clockwise: TRBL).

---

## What does the following code using arrow syntax function declaration do?

Example:

```js
const add = (a, b) => a + b;        // concise return
const greet = name => {              // block body
  console.log(`Hi, ${name}!`);
};
```

* Arrow functions:

  * Provide shorter syntax.
  * **Don’t bind their own `this`** (they capture `this` from the surrounding scope).
  * Implicit return when using the concise form (no `{}`).

---

## What does the following code using `map` with an array output?

Example:

```js
[1, 2, 3].map(x => x * 2);  // → [2, 4, 6]
['a','b'].map(s => s.toUpperCase()); // → ['A','B']
```

* `map` returns a **new array** of the same length, transforming each item.

---

## What does the following code output using `getElementById` and `addEventListener`?

Example:

```html
<button id="btn">Click me</button>
<script>
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => console.log('Clicked!'));
</script>
```

* Clicking the button logs `Clicked!` to the console.

---

## What does the following line of JavaScript do using a `#` selector?

Example:

```js
const el = document.querySelector('#title');
```

* Uses **CSS selector syntax** to select the **element with id `title`** (first match).

---

## Which of the following are true? (mark all that are true about the DOM)

**True statements about the DOM:**

* The DOM is a **tree** representation of the document.
* You can **create, remove, and modify** nodes at runtime.
* Event listeners can be attached to DOM nodes.
* Layout/CSSOM + DOM are used by the browser to **compute rendering**.
* **Not** every whitespace creates a text node that visibly changes layout; rendering depends on CSS and element types.

---

## By default, the HTML `span` element has a default CSS `display` property value of:

* `inline`.

---

## How would you use CSS to change all the `div` elements to have a background color of red?

```css
div { background: red; }
```

---

## How would you display an image with a hyperlink in HTML?

```html
<a href="https://example.com">
  <img src="/cat.jpg" alt="A cat">
</a>
```

---

## In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

**content → padding → border → margin**

---

## Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

* **You cannot target part of a text node by substring with pure CSS.**
* Wrap the target text:

  ```html
  <p><span class="green">trouble</span> double</p>
  ```

  ```css
  .green { color: green; }
  ```

---

## What will the following code output when executed using a `for` loop and `console.log`?

Example:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

Output:

```
1
2
3
```

(Exact output depends on the loop code provided.)

---

## How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

```js
document.getElementById('byu').style.color = 'green';
// or
document.querySelector('#byu').style.color = 'green';
```

---

## What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

* Paragraph: `<p>`
* Ordered list: `<ol>`
* Unordered list: `<ul>`
* Second-level heading: `<h2>`
* First-level heading: `<h1>`
* Third-level heading: `<h3>`

---

## How do you declare the document type to be html?

```html
<!DOCTYPE html>
```

---

## What is valid JavaScript syntax for `if`, `else`, `for`, `while`, `switch` statements?

```js
// if / else
if (x > 0) {
  // ...
} else {
  // ...
}

// for
for (let i = 0; i < n; i++) {
  // ...
}

// while
while (condition) {
  // ...
}

// switch
switch (value) {
  case 'a':
    // ...
    break;
  case 'b':
    // ...
    break;
  default:
    // ...
}
```

---

## What is the correct syntax for creating a JavaScript object?

```js
const person = {
  name: 'Ada',
  age: 36,
  skills: ['math', 'computing'],
  greet() { console.log('Hello'); }
};
```

---

## Is it possible to add new properties to JavaScript objects?

* **Yes.**

  ```js
  const obj = {};
  obj.color = 'green';           // dot notation
  obj['favorite-number'] = 42;   // bracket notation for special names
  ```

---

## If you want to include JavaScript on an HTML page, which tag do you use?

```html
<script src="/app.js"></script>
<!-- or inline -->
<script>
  console.log('Hello');
</script>
```

---

## Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

If the HTML marks them distinctly:

```html
<p id="animal">animal</p>
<p id="fish">fish</p>

<script>
  document.getElementById('animal').textContent = 'crow';
  // leaves #fish alone
</script>
```

If they’re in one element, wrap “animal” with a span and target that span.

---

## Which of the following correctly describes JSON?

* **JSON** (JavaScript Object Notation) is a **text data format** for structured data: objects (key–value) and arrays.
* Keys and string values must use **double quotes**.
* Example:

  ```json
  {
    "name": "Ada",
    "age": 36,
    "skills": ["math", "computing"],
    "active": true,
    "meta": { "country": "UK" }
  }
  ```

---

## What does the console command `chmod`, `pwd`, `cd`, `ls`, `vim`, `nano`, `mkdir`, `mv`, `rm`, `man`, `ssh`, `ps`, `wget`, `sudo` do?

* `chmod` — change file permissions.
* `pwd` — print working directory.
* `cd` — change directory.
* `ls` — list directory contents.
* `vim` — open the Vim text editor.
* `nano` — open the Nano text editor.
* `mkdir` — make directory.
* `mv` — move/rename files or directories.
* `rm` — remove files or directories (`-r` recursive, `-f` force).
* `man` — show manual pages (help).
* `ssh` — connect to a remote shell over SSH.
* `ps` — list running processes.
* `wget` — download files from the web (HTTP/HTTPS/FTP).
* `sudo` — run a command with elevated (superuser) privileges.

---

## Which of the following console command creates a remote shell session?

* **`ssh`** (Secure Shell).

---

## Which of the following is true when the `-la` parameter is specified for the `ls` console command?

* `ls -la`:

  * `-l` → **long listing** (permissions, owner, size, date).
  * `-a` → include **hidden** entries (names starting with `.`).
  * Together: long listing **including hidden files**.

---

## Which of the following is true for the domain name `banana.fruit.bozo.click`—which is the top level domain, which is a subdomain, which is a root domain?

* **Top-level domain (TLD):** `click`
* **Root (registrable) domain:** `bozo.click`
* **Subdomain(s):** `fruit.bozo.click` is a subdomain of `bozo.click`, and `banana.fruit.bozo.click` is a **deeper subdomain** (sub-subdomain).

---

## Is a web certificate necessary to use HTTPS.

* For **trusted HTTPS in browsers**, **yes**—you need a valid **X.509 TLS certificate** issued by a trusted Certificate Authority (or a managed equivalent).
* Self-signed certs can encrypt but trigger **warnings** and are not considered trusted by default.

---

## Can a DNS A record point to an IP address or another A record.

* **False statement.** An **A record** must point to an **IPv4 address** only.
* To alias another hostname, use **CNAME** (with caveats at the zone apex).

---

## Port 443, 80, 22 is reserved for which protocol?

* **443:** HTTPS
* **80:** HTTP
* **22:** SSH

---

## What will the following code using Promises output when executed?

Without your specific code, here’s a classic example and its output order:

```js
const p = new Promise(resolve => {
  console.log('A');     // runs immediately (synchronous)
  resolve('B');         // queues microtask
  console.log('C');     // still synchronous
});

p.then(v => console.log(v));  // microtask after current call stack
console.log('D');             // synchronous
```

**Output order:**

```
A
C
D
B
```

* Promise executor runs synchronously (`A`, `C`, `D`).
* `.then` callbacks run in the **microtask queue** after the stack clears (`B`).
