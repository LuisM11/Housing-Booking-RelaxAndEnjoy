import React, { useState } from "react";

function FeatureCard({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValueName, setNewValueName] = useState(item.name);
    const [newValueIcon, setNewValueIcon] = useState(item.icon);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChangeName(e) {
      setNewValueName(e.target.value);
    }
    function handleChangeIcon(e) {
      setNewValueIcon(e.target.value);
    }

    function handleClick() {
      let value = { name: newValueName, icon: newValueIcon };
      onUpdate(item.id, value);
      setIsEdit(false);
    }

    return (
      <div
        onClick={handleSubmit}
        className="w-full flex border border-grayColor border-opacity-50 rounded-md p-3 tablet:p-5 gap-0 tablet:gap-5"
      >
        <div className="w-full flex tablet:grid tablet:grid-cols-2 flex-col gap-2 tablet:gap-10 ">
          <input
            type="text"
            onChange={handleChangeName}
            value={newValueName}
            className="rounded-md shadow-md h-10"
          />
          <input
            type="text"
            onChange={handleChangeIcon}
            value={newValueIcon}
            className="rounded-md shadow-md h-10"
          />
        </div>
        <div className="w-20 tablet:w-32 flex flex-col tablet:flex-row gap-5 justify-center items-center">
          <button
            onClick={handleClick}
            className="w-10 h-10 flex justify-center items-center text-3xl font-bold rounded-md bg-green-400 text-fourthColor hover:bg-opacity-70 shadow-md"
          >
            <i className="fa-solid fa-check text-xl"></i>
          </button>
        </div>
      </div>
    );
  }

  function TodoElement() {
    return (
      <div className="w-full flex border border-white rounded-md p-3 tablet:p-5 gap-1 tablet:gap-5">
        <div className="w-full flex tablet:grid tablet:grid-cols-2 flex-col justify-center items-start gap-2 tablet:gap-6">
          <span
            onClick={() => setIsEdit(true)}
            className="text-base font-normal text-secundaryColor bg-white bg-opacity-70 rounded-md shadow-md pl-4 h-10 flex justify-start items-center w-full"
          >
            {item.name}
          </span>
          <span
            onClick={() => setIsEdit(true)}
            className="text-base text-secundaryColor bg-white bg-opacity-70 rounded-md shadow-md pl-4 h-10 flex justify-start items-center w-full"
          >
            {item.icon}
          </span>
        </div>
        <div className="w-20 tablet:w-32 flex flex-col tablet:flex-row gap-5 justify-center items-center">
          <button
            onClick={(e) => onDelete(item.id)}
            className="w-10 h-10 rounded-md bg-redWarning justify-center items-center flex"
          >
            <i className="fa-solid fa-trash text-xl text-black"></i>
          </button>
        </div>
      </div>
    );
  }

  return <>{isEdit ? <FormEdit /> : <TodoElement />}</>;
}

export default FeatureCard;
