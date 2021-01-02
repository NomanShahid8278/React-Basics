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

// Through JS hoisting fnction goes on the top when JS compiles, Variables also goes on top but there values do not.

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
  // External Event
  const clickHandler = () => {
    console.log(author);
  };
  const complexExample = (name) => {
    console.log(name);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      {/* Inline Event */}
      <h1
        onMouseOver={() => {
          console.log(title);
        }}
      >
        Show Title
      </h1>
      <button type="button" onClick={clickHandler}>
        Book Name
      </button>
      {/* If you want to pass parameter you should use function as arrow function, not invoke the function */}
      <button
        type="button"
        onClick={() => {
          complexExample("Nomi");
        }}
      >
        Show Title
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
