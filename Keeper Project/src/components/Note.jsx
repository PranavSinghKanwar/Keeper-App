import React, { useState } from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.sentTitle}</h1>
      <p>{props.sentContent}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;