import React from "react";
import type { Animal } from "../../types";
import "./AnimalList.scss";
import Skeleton from "../Skeleton/Skeleton";

interface AnimalListProps {
  animals: Animal[];
  onSelectAnimal: (animal: Animal) => void;
  loading: boolean;
}

const AnimalList: React.FC<AnimalListProps> = ({ animals, onSelectAnimal, loading }) => {
 
  if (loading && animals.length >= 0 ) {
    return <Skeleton count={animals.length}/>
  }

  return (
    <ul className="animal-list">
      {animals.map((animal) => (
        <li key={animal.id} className="animal-list__item">
          <span>{animal.url}</span>
          <button
            type="button"
            className="animal-list__anchor"
            onClick={() => onSelectAnimal(animal)}
          >
            <h3 className="animal-list__title">{animal.title}</h3>
          </button>
          <p className="animal-list__type">{animal.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;