import React, { useReducer } from "react";

interface Animal {
  form: string[];
}

type AnimalContext = {
  type: "ADD_ANIMAL" | "REMOVE_ANIMAL";
};

const AppContext: React.FC = () => {
  const animal = useReducer(
    (state: Animal, action: AnimalContext) => {
      switch (action.type) {
        case "ADD_ANIMAL":
          return {
            ...state,
            form: [...state.form, "Novo registro"],
          };
        default:
          return state;
      }
    },
    {
      form: ["Bem-te-vi"],
    }
  );

  return (
    <div>
      <h3>Reino Animal</h3>
      <ul></ul>
    </div>
  );
};

export default AppContext;
