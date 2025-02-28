import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalList from "./AnimalList";
import type { Animal } from "../../types";

const mockAnimals: Animal[] = [
  {
    url: "https://example.com",
    image: "https://example.com/image.jpg",
    title: "Animal 1",
    description: "This is an example animal description.",
    id: "1",
    type: "example",
  },
  {
    url: "https://example2.com",
    image: "https://example2.com/image.jpg",
    title: "Animal 2",
    description: "This is an example animal description.",
    id: "2",
    type: "example2",
  },
];

describe("AnimalList", () => {
  it("renders loading skeletons when loading is true", () => {
    const { container } = render(
      <AnimalList animals={mockAnimals} onSelectAnimal={jest.fn()} loading={true} />
    );
    expect(container.querySelectorAll(".results-skeleton-list__item")).toHaveLength(
      mockAnimals.length
    );
  });

  it("renders animal list when loading is false", () => {
    render(
      <AnimalList animals={mockAnimals} onSelectAnimal={jest.fn()} loading={false} />
    );
    expect(screen.getByText("Animal 1")).toBeInTheDocument();
    expect(screen.getByText("Animal 2")).toBeInTheDocument();
  });

  it("calls onSelectAnimal when an animal is clicked", () => {
    const onSelectAnimal = jest.fn();
    render(
      <AnimalList animals={mockAnimals} onSelectAnimal={onSelectAnimal} loading={false} />
    );
    fireEvent.click(screen.getByText("Animal 1"));
    expect(onSelectAnimal).toHaveBeenCalledWith(mockAnimals[0]);
  });
});