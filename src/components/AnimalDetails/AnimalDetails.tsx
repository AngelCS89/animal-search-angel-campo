import React, { memo } from "react";
import type { Animal } from "../../types";
import "./AnimalDetails.scss";

interface AnimalDetailsProps {
  animal: Animal;
  onClose: () => void;
}

const AnimalDetails: React.FC<AnimalDetailsProps> = ({ animal, onClose }) => {
  return (
    <aside className="animal-details">
      <button
        type="button"
        className="animal-details__close"
        onClick={onClose}
        aria-label="Close details"
      >
        x
      </button>
      <h3 className="animal-details__url">{animal.url}</h3>
      <img
        src={animal.image || "/placeholder.svg"}
        alt={animal.title}
        className="animal-details__image"
      />
      <h2 className="animal-details__title">{animal.title}</h2>
      <p className="animal-details__description">{animal.description}</p>
    </aside>
  );
};

export default memo(AnimalDetails);