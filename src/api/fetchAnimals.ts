import { faker } from "@faker-js/faker";
import type { Animal } from "../types";

export function fetchFakeAnimals(query: string): Promise<Animal[]> {
  const getUrl = () => faker.internet.url();
  const getText = () => faker.lorem.sentences();
  const getTitle = (type: keyof typeof faker.animal) => faker.animal[type]();

  if (!(query in faker.animal)) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const type = query;
      const animals: Animal[] = Array.from({ length: 50 }, () => ({
        type,
        id: faker.string.uuid(),
        title: getTitle(type as keyof typeof faker.animal),
        url: getUrl(),
        description: getText(),
        image: faker.image.urlLoremFlickr({ width: 644, height: 362, category: "animals" }),
      }));
      resolve(animals);
    }, 1000);
  });
}