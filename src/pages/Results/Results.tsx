import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import type { Animal } from "../../types";
import AnimalList from "../../components/AnimalList/AnimalList";
import AnimalDetails from "../../components/AnimalDetails/AnimalDetails";
import useFetchAnimals from "../../hooks/useFetchAnimals";
import "./Results.scss";

const Results: React.FC = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.trim() || "";

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const { animals, loading } = useFetchAnimals(query);

  const handleSelectAnimal = (animal: Animal) => setSelectedAnimal(animal);
  const handleCloseDetails = () => setSelectedAnimal(null);

  const renderEmptyState = (message?: string) => (
    <div className="results">
      {message && <p className="results__empty-message">{message}</p>}
      <p className="results__no-query">Try looking for: dog, cat, cow, lion...</p>
    </div>
  );

  if (!query) {
    return renderEmptyState();
  }

  if (!loading && animals.length === 0) {
    return renderEmptyState(`No results found for "${query}"`);
  }

  return (
    <div className="results">
      <div className="results__wrapper">
        <div className="results__content">
          <AnimalList animals={animals} onSelectAnimal={handleSelectAnimal} loading={loading} />
        </div>
        <div className="results__sidebar">
          {selectedAnimal && (
            <AnimalDetails animal={selectedAnimal} onClose={handleCloseDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;