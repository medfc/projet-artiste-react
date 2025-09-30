import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, test, expect } from "vitest";
import MapEtFormulaire from "../components/MapEtFormulaire";

describe("MapEtFormulaire", () => {
  test("remplit les champs du formulaire correctement", () => {
    render(<MapEtFormulaire />);

    const nomInput = screen.getByPlaceholderText(/nom/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const messageInput = screen.getByPlaceholderText("Comment puis-je vous aider ?"); 

    fireEvent.change(nomInput, { target: { value: "Jean Dupont" } });
    fireEvent.change(emailInput, { target: { value: "jean@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Bonjour, ceci est un test." } });

    expect(nomInput.value).toBe("Jean Dupont");
    expect(emailInput.value).toBe("jean@example.com");
    expect(messageInput.value).toBe("Bonjour, ceci est un test.");
  });
});
