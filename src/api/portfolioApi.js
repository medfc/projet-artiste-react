  import { portfolioData } from "../data/portfolioData";

  export function fetchPortfolioData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(portfolioData);
      }, 500); // pour simuler un appel réseau
    });
  }
