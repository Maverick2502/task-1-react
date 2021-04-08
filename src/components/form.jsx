import React, { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    birthDate: "",
    select: [],
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="contact__container bd-grid">
      <form action="" class="contact__form">
        <div className="contact__inner">
          <input
            name="fName"
            onChange={handleChange}
            placeholder="Name"
            value={fullName.fName}
          />
          <br />
          <input
            name="lName"
            onChange={handleChange}
            placeholder="Surname"
            value={fullName.lName}
          />
          <br />
          <input
            name="birthDate"
            onChange={handleChange}
            placeholder="Birth Date"
            value={fullName.birthDate}
          />
          <br />
          <select name="select" onChange={handleChange}>
            <optgroup label="Select">
              <option value="⭐">⭐</option>
              <option value="🖤">🖤</option>
              <option value="🛑">🛑</option>
            </optgroup>
          </select>
        </div>
      </form>
      <div className="contact__info">
        <p className="contact__subtitle">Name: {fullName.fName}</p>
        <p className="contact__subtitle">Surname: {fullName.lName}</p>
        <p className="contact__subtitle">Birth Date: {fullName.birthDate}</p>
        <p className="contact__subtitle" placeholder="selelct result">
          ({fullName.select})
        </p>
      </div>
    </div>
  );
}

export default Form;
