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
export default Book;
