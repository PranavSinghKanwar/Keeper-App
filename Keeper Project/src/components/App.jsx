import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const arr = [{ title: "Title", content: "Content" }];

function createNote(obj) {
  return <Note key={1} sentTitle={obj.title} sentContent={obj.content} />;
}

function App() {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("Content");

  function setter(obj) {
    setTitle(obj.title);
    setContent(obj.content);
    var ht = obj.title;
    var hc = obj.content;

    arr.push({ title: ht, content: hc });
  }
  return (
    <div>
      <Header />
      <CreateArea setInput={setter} />
      {arr.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;