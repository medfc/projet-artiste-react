import { render, screen } from "@testing-library/react";
import GallerySection from "../components/GallerySection";
import '@testing-library/jest-dom';
import { describe, test, expect } from "vitest";


// Données fictives pour simuler des images de la galerie
const itemsToDisplay = [
  {
    id: 1,
    image: "image-test-1.jpg",
    alt: "Image Test 1",
    title: "Image Test 1",
    description: "Ceci est une description 1",
  },
  {
    id: 2,
    image: "image-test-2.jpg",
    alt: "Image Test 2",
    title: "Image Test 2",
    description: "Ceci est une description 2",
  },
];

describe("GallerySection", () => {
  test("doit afficher le titre de la section", () => {
    render(<GallerySection title="Titre de test" items={itemsToDisplay} />);
    const titre = screen.getByText("Titre de test");
    expect(titre).toBeInTheDocument();
  });

  test("doit afficher toutes les images et descriptions", () => {
    render(<GallerySection title="Galerie" items={itemsToDisplay} />);

    expect(screen.getByAltText("Image Test 1")).toBeInTheDocument();
    expect(screen.getByAltText("Image Test 2")).toBeInTheDocument();

    expect(screen.getByText("Ceci est une description 1")).toBeInTheDocument();
    expect(screen.getByText("Ceci est une description 2")).toBeInTheDocument();
  });
});
