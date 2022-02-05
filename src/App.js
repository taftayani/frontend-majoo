/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Label from "./component/label";
import ButtonComponent from "./component/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodo } from "./redux/actionExecute";
import { useSelector } from "react-redux";
import ListTodo from "./component/listTodo";

const App = () => {
  // state management
  const [btnTab, setBtnTab] = useState("done");
  // dispatch for execute the redux
  const dispatch = useDispatch();
  // to get the selector from reducer
  const detail = useSelector((state) => state.ListApiTodo);
  // to get Api list and hit into action redux
  const ApiGetTodo = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_API);
      console.log(response);
      dispatch(setTodo(response));
    } catch (e) {
      console.log(e);
    }
  };
  // filter list api
  const DoneList = detail
    ? detail.data
        .filter((list) => {
          return list.status === 1;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateFirst - dateSecond;
        })
    : "";
  const UndoneList = detail
    ? detail.data
        .filter((list) => {
          return list.status === 0;
        })
        .sort((a, b) => {
          var dateFirst = new Date(a.createdAt);
          var dateSecond = new Date(b.createdAt);
          return dateSecond - dateFirst;
        })
    : "";
  // useEffect to render the redux api
  useEffect(() => {
    if (!detail) {
      ApiGetTodo();
    }
    console.log("detail", detail);
  }, detail);
  return (
    <div className="App">
      <Label classText={"Header-page"}>My Task</Label>
      <div className="divider" />
      <Label classText={"Paragraph-page"}>
        Hey there, please check your task before you guys doing other
      </Label>

      {/* tab choosing done and undone  */}
      <div className="flex-module content-center">
        <h1>{detail ? detail.tes : ""}</h1>
        <ButtonComponent
          classButton={`mr-10px ${
            btnTab === "undone" ? "button-tab-active" : "button-tab "
          }`}
          onClick={() => setBtnTab("undone")}
        >
          Undone task
        </ButtonComponent>
        <ButtonComponent
          classButton={`${
            btnTab === "done" ? "button-tab-active" : "button-tab "
          }`}
          onClick={() => setBtnTab("done")}
        >
          Done task
        </ButtonComponent>
        {/* modal wrrping detail  */}
      </div>
      {/* tab choosing done and undone  */}

      {/* content todo list  */}
      {btnTab === "done" ? <ListTodo list={DoneList} /> : ""}
      {btnTab === "undone" ? <ListTodo list={UndoneList} /> : ""}
      {/* content todo list  */}
    </div>
  );
};

export default App;
