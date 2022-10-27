import React, { useContext } from "react";
import AnimalContext from "./AnimalContext";

const AppContext: React.FC = () => {
  const { form } = useContext(AnimalContext);

  return (
    <div>
      <h3>Reino Animal</h3>
      <ul>
        {form?.map((form) => (
          <li key={form.name}>{form.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppContext;
