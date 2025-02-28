import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalDetails from "./AnimalDetails";
import type { Animal } from "../../types";

describe("AnimalDetails", () => {
    const mockAnimal: Animal = {
        url: "https://example.com",
        image: "https://example.com/image.jpg",
        title: "Example Animal",
        description: "This is an example animal description.",
        id: "1",
        type: "example",
    };

    const mockOnClose = jest.fn();

    it("renders animal details correctly", () => {
        render(<AnimalDetails animal={mockAnimal} onClose={mockOnClose} />);

        expect(screen.getByText(mockAnimal.url)).toBeInTheDocument();
        expect(screen.getByAltText(mockAnimal.title)).toBeInTheDocument();
        expect(screen.getByText(mockAnimal.title)).toBeInTheDocument();
        expect(screen.getByText(mockAnimal.description)).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
        render(<AnimalDetails animal={mockAnimal} onClose={mockOnClose} />);

        const closeButton = screen.getByRole("button", { name: /close details/i });
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("displays placeholder image when animal image is not provided", () => {
        const animalWithoutImage: Animal = { ...mockAnimal, image: "" };
        render(<AnimalDetails animal={animalWithoutImage} onClose={mockOnClose} />);

        const placeholderImage = screen.getByAltText(mockAnimal.title);
        expect(placeholderImage).toHaveAttribute("src", "/placeholder.svg");
    });
});