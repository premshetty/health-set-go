import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editForm } from "../redux/formsSlice";

const FormList = ({ categories }) => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  const [editFormId, setEditFormId] = useState("");
  const [editFormValues, setEditFormValues] = useState({
    name: "",
    email: "",
    uid: "",
    phoneNumber: "",
    description: "",
    categoryId: "",
  });

  const handleEditForm = (form) => {
    setEditFormId(form.id);
    setEditFormValues({
      name: form.name,
      email: form.email,
      uid: form.uid,
      phoneNumber: form.phoneNumber,
      description: form.description,
      categoryId: form.categoryId,
    });
  };

  const handleSaveForm = () => {
    dispatch(
      editForm({
        id: editFormId,
        ...editFormValues,
      })
    );
    setEditFormId("");
    setEditFormValues({
      name: "",
      email: "",
      uid: "",
      phoneNumber: "",
      description: "",
      categoryId: "",
    });
  };

  const handleFormValueChange = (field, value) => {
    setEditFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setEditFormValues((prevValues) => ({
      ...prevValues,
      categoryId: e.target.value,
    }));
  };
  console.log(forms);
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {forms.map((form) => (
        <li
          key={form.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "4px",
          }}
        >
          {form.id === editFormId ? (
            <>
              <input
                type="text"
                value={editFormValues.name}
                onChange={(e) => handleFormValueChange("name", e.target.value)}
                style={{
                  marginRight: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <input
                type="email"
                value={editFormValues.email}
                onChange={(e) => handleFormValueChange("email", e.target.value)}
                style={{
                  marginRight: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />

              <input
                type="text"
                value={editFormValues.phoneNumber}
                onChange={(e) =>
                  handleFormValueChange("phoneNumber", e.target.value)
                }
                style={{
                  marginRight: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <textarea
                value={editFormValues.description}
                onChange={(e) =>
                  handleFormValueChange("description", e.target.value)
                }
                style={{
                  marginRight: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              ></textarea>
              <select
                value={editFormValues.categoryId}
                onChange={handleCategoryChange}
                style={{
                  marginRight: "8px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
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
                onClick={handleSaveForm}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span style={{ marginRight: "8px" }}>{form.name}</span>
              <span style={{ marginRight: "8px" }}>{form.email}</span>
              <span style={{ marginRight: "8px" }}>{form.phoneNumber}</span>
              <span style={{ marginRight: "8px" }}>{form.description}</span>
              <span style={{ marginRight: "8px" }}>{form.categoryId}</span>
              <button
                onClick={() => handleEditForm(form)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FormList;
