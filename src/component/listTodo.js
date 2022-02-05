import React from "react";
import ButtonComponent from "./button";
import ImageComponent from "./img";
import Label from "./label";
const ListTodo = ({ list }) => {
  //  show all todo list from api component
  return (
    <div>
      {list
        ? list.map((todo, index) => {
            return (
              <div key={index} className="flex-module content-center mt-50px">
                <ImageComponent
                  classImg={"img-list"}
                  srcImg={`${
                    todo.status == 1
                      ? "/img-todo/check-done.svg"
                      : "/img-todo/check-ndone.svg"
                  }`}
                />
                <div className="text-left w-300px">
                  <Label classText={"header-list"}>{todo.title}</Label>
                  <Label classText={"description-list"}>
                    {todo.description}
                  </Label>
                  <Label classText={"description-list"}>{todo.createdAt}</Label>
                </div>
                <ButtonComponent onClick={""} classButton={"detail-btn"}>
                  Detail
                </ButtonComponent>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default ListTodo;
