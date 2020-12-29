import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91Ql48Y0mqL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1>The Vanishing Half: A Novel The Vanishing Half: A Novel</h1>
);

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    V. E. Schwab
  </h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));
