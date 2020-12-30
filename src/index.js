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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga ab
          consectetur natus autem eaque nesciunt quae odio commodi totam?
        </p>
      </Book>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
    </section>
  );
}

// Destructuring of Props in params, it will be in parameters where we recieve props like:
// const Book = { img, title, author, children };

const Book = (props) => {
  // Destructuring of Props in component
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      {props.children}
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
