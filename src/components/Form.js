import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addForm } from "../redux/formsSlice";

const Form = ({ categories }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      id: uuid(),
      name,
      email,
      uid,
      phoneNumber,
      description,
      categoryId,
    };
    dispatch(addForm(form));
    setName("");
    setEmail("");
    setUid("");
    setPhoneNumber("");
    setDescription("");
    setCategoryId("");
  };

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="name" style={{ marginBottom: "8px" }}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      />

      <label htmlFor="email" style={{ marginBottom: "8px" }}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      />

      <label htmlFor="phoneNumber" style={{ marginBottom: "8px" }}>
        Phone Number:
      </label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      />

      <label htmlFor="description" style={{ marginBottom: "8px" }}>
        Description:
      </label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
          minHeight: "100px",
        }}
      />

      <label htmlFor="categoryId" style={{ marginBottom: "8px" }}>
        Category:
      </label>
      <select
        id="categoryId"
        value={categoryId}
        onChange={handleCategoryChange}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          alignSelf: "flex-start",
          width: "fit-content",
        }}
      >
        Add Form
      </button>
    </form>
  );
};

export default Form;
