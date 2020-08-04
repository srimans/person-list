import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = (props) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt={props.name} />
      <h4>{props.name}</h4>
      <h4>{props.job}</h4>
      {props.children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="developer" />
      <Person img="22" name="Bob" job="designer">
        daeatt yrdyr tdytddy yufuff yfyuff
      </Person>
      <Person img="56" name="David" job="boss" />
    </section>
  );
};

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));
