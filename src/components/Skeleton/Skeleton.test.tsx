import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton component", () => {
    it("renders the correct number of skeleton items", () => {
        const { container } = render(<Skeleton count={3} />);
        const skeletonItems = container.querySelectorAll(".results-skeleton-list__item");
        expect(skeletonItems.length).toBe(3);
    });

    it("renders default number of skeleton items when count is not provided", () => {
        const { container } = render(<Skeleton />);
        const skeletonItems = container.querySelectorAll(".results-skeleton-list__item");
        expect(skeletonItems.length).toBe(5);
    });

    it("renders skeleton structure correctly", () => {
        const { container } = render(<Skeleton count={1} />);
        const skeletonItem = container.querySelector(".results-skeleton-list__item");
        expect(skeletonItem).toBeInTheDocument();
        expect(skeletonItem?.querySelector(".skeleton__url")).toBeInTheDocument();
        expect(skeletonItem?.querySelector(".skeleton__title")).toBeInTheDocument();
        expect(skeletonItem?.querySelector(".skeleton__description")).toBeInTheDocument();
    });
});