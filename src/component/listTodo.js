/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../redux/actionExecute";
import ButtonComponent from "./button";
import ImageComponent from "./img";
import InputComponent from "./input";
import Label from "./label";
import ModalDetail from "./Modal/modal";
import SelectInput from "./select";
//  show all todo list from api component
const ListTodo = ({ list }) => {
  // state for edit the data
  const [formData, setFormData] = useState({
    title: "",
    id: "",
    status: "",
    desc: "",
    date: "",
    popup: false,
  });
  // btn showing modal
  const showingModal = (todo) => {
    setFormData({
      title: todo.title,
      id: todo.id,
      status: todo.status,
      desc: todo.description,
      date: todo.createdAt,
      popup: true,
    });
  };
  // dispatch for execute the redux
  const dispatch = useDispatch();
  // to get the selector from reducer
  const detail = useSelector((state) => state.ListApiTodo);
  // submit edit
  const EditFormData = () => {
    //   get id array from redux api get
    detail.data.map((edit, index) => {
      if (edit.id === formData.id) {
        let updateData = [...detail.data];
        updateData[index] = {
          description: formData.desc,
          id: formData.id,
          status: parseInt(formData.status),
          title: formData.title,
          createdAt: formData.date,
        };
        // dispatch the redux to update data
        dispatch(
          setTodo({
            ...detail,
            data: updateData,
          })
        );

        console.log("update", detail);
      }
    });
    //   set State from zero to un popup the modal
    setFormData({
      title: "",
      id: "",
      status: "",
      desc: "",
      popup: false,
    });
  };
  return (
    <div>
      {console.log("editData", formData)}
      {list
        ? list.map((todo, index) => {
            return (
              <div key={index} className="flex-module content-center mt-50px">
                <ImageComponent
                  classImg={"img-list"}
                  srcImg={`${
                    todo.status === 1
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
                <ButtonComponent
                  onClick={() => showingModal(todo)}
                  classButton={"detail-btn"}
                >
                  Detail
                </ButtonComponent>
              </div>
            );
          })
        : ""}
      {/* show popup modal element */}
      {formData.popup ? (
        <ModalDetail
          closeModal={() =>
            setFormData({
              ...formData,
              popup: false,
              id: "",
            })
          }
        >
          <ImageComponent
            classImg={"img-todo"}
            srcImg={"/img-todo/img-todo.png"}
          />
          <div className="flex-module">
            <div className="text-left p-10px mr-20px">
              <Label classText={"header-label-input"}>Title Task</Label>
              <InputComponent
                placeholder={"please fill form"}
                typeInput={"text"}
                className={"type-input-text"}
                valueInput={formData.title}
                onChange={(e) =>
                  // edit title data
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="text-left p-10px">
              <Label classText={"header-label-input"}>Status</Label>
              <SelectInput
                className={"select-input"}
                value={formData.status}
                onChange={(e) =>
                  // edit status data
                  setFormData({
                    ...formData,
                    status: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="text-left p-10px">
            <Label classText={"header-label-input"}>Description</Label>
            <InputComponent
              placeholder={"please fill form"}
              typeInput={"textarea"}
              className={"type-input-textarea"}
              valueInput={formData.desc}
              onChange={(e) =>
                // edit desc data
                setFormData({
                  ...formData,
                  desc: e.target.value,
                })
              }
            />
          </div>
          <div className="flex-module">
            <div className="mt-20px">
              <ButtonComponent
                onClick={() => EditFormData()}
                classButton={"button-tab-active"}
              >
                Update Task
              </ButtonComponent>
            </div>
            <div className="mt-20px">
              <ButtonComponent
                onClick={() => EditFormData()}
                classButton={"button-tab-active"}
              >
                Update Task
              </ButtonComponent>
            </div>
          </div>
        </ModalDetail>
      ) : (
        ""
      )}
    </div>
  );
};
export default ListTodo;
