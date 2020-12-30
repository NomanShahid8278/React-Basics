import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half: A Novel The Vanishing Half: A Novel",
    author: "V. E. Schwab",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promise Land",
    author: "Barack Obama",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
