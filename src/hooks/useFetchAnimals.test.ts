import useFetchAnimals from "./useFetchAnimals";
import { fetchFakeAnimals } from "../api/fetchAnimals";
import type { Animal } from "../types";
import { renderHook, waitFor, act } from "@testing-library/react";

jest.mock("../api/fetchAnimals");

describe("useFetchAnimals", () => {
  const mockAnimals: Animal[] = [
    {
      id: '1',
      title: 'Lion',
      type: 'Mammal',
      description: 'The lion is a species in the family Felidae.',
      image: 'lion.jpg',
      url: 'https://example.com/lion'
    },
    {
      id: '2',
      title: 'Eagle',
      type: 'Bird',
      description: 'The eagle is a bird of prey in the family Accipitridae.',
      image: 'eagle.jpg',
      url: 'https://example.com/eagle'
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should fetch animals and update state", async () => {
    (fetchFakeAnimals as jest.Mock).mockResolvedValue(mockAnimals);

    const { result } = renderHook(() => useFetchAnimals("query"));

    expect(result.current.loading).toBe(true);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => expect(result.current.loading).toBe(false), { timeout: 3000 });

    expect(result.current.animals).toEqual(mockAnimals);
    expect(result.current.loading).toBe(false);
  });

  it("should handle fetch error", async () => {
    (fetchFakeAnimals as jest.Mock).mockRejectedValue(new Error("Fetch error"));

    const { result } = renderHook(() => useFetchAnimals("query"));

    expect(result.current.loading).toBe(true);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => expect(result.current.loading).toBe(false), { timeout: 3000 });
    expect(result.current.animals).toEqual([]);
    expect(result.current.loading).toBe(false);
  });
});