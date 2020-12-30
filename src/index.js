import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
// Setup Variables
const author = "V. E. Schwab";
const title = "The Vanishing Half: A Novel The Vanishing Half: A Novel";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg";

// Setup Objects
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg",
  title: "The Vanishing Half: A Novel The Vanishing Half: A Novel",
  author: "V. E. Schwab",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
  title: "A Promise Land",
  author: "Barack Obama",
};
function BookList() {
  return (
    <section className="booklist">
      <Book title={title} author={author} img={img} />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
