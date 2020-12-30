import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'V. E. Schwab'

const Book = () => {
   const title = 'The Vanishing Half: A Novel The Vanishing Half: A Novel'
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* JS in JSX must return something otherwise it gives error */}
      <p>{6+6}</p>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
