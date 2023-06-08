import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux";
import CategoryForm from "./components/CategoryForm";
import Form from "./components/Form";
import FormList from "./components/FormList";

const App = () => {
  const categories = useSelector((state) => state.categories);
  const [showCategory, setShowCategory] = useState(false);

  return (
    <Provider store={store}>
      <div>
        <button
          className="cat-btn"
          onClick={() => setShowCategory(!showCategory)}
        >
          {showCategory ? "Hide Category" : "Create Category"}
        </button>
        {showCategory && <CategoryForm />}

        <h2>Create Form</h2>
        <Form categories={categories} />

        <h2>Forms</h2>
        <FormList categories={categories} />
      </div>
    </Provider>
  );
};

export default App;
