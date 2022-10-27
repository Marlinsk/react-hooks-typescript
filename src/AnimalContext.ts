import { createContext } from "react";

interface Taxonomy {
  name: string,
  scientific_name: string,
  family: string,
}
interface Animal {
  form: Taxonomy[]
}

const AnimalContext = createContext<Animal>(null);

export default AnimalContext
