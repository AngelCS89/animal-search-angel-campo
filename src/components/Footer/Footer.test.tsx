import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Footer from "./Footer";

describe("Footer component", () => {
    it("should render the footer with correct text", () => {
        const { getByText } = render(<Footer />)
        expect(getByText("© Google 2025")).toBeInTheDocument()
        expect(getByText("version 0.1.0")).toBeInTheDocument()
    })
})