import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addCategory } from "../redux/categoriesSlice";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      id: uuid(),
      name,
      description,
    };
    dispatch(addCategory(category));
    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
      className="category-form"
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
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
