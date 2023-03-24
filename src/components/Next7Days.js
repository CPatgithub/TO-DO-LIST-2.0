import React from "react";
import ListRender from "./ListRender";

const Next7Days = (props) => {
  const date = new Date();
  const nextWeek = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000); 
  const list = props.list.filter((itm) => {
    const propsDate = new Date(itm.date);

    return propsDate <= date || propsDate <= nextWeek && propsDate >= date;
  });


  return (
    <div id="next-list">
      <ListRender list={list} />
    </div>
  );
};

export default Next7Days;
