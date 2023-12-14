import React, {useState} from "react";

function CreateArea(props) {

  const [obj, setObj] = useState({title: "", content:""});

  function handleChange(event){
    var newVal = event.target.value;
    var changer = event.target.name;

    setObj((prevVal) =>{
      return {
        ...prevVal,
        [changer] : newVal
      }
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick = {(event) => {
          props.setInput(obj);
          event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;