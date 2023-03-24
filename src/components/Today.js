import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  const list = props.list.filter((obj)=>obj.date == date.toLocaleDateString("en-US"));
  return (
    <div id="today-list">
      <ListRender list={list} />
    </div>
  );
};

export default Today;
