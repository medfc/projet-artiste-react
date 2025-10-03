
  // Cette fonction va chercher les données dans public/data/portfolioData.json

  export async function fetchPortfolioData() {
    try {
      const response = await fetch("/data/portfolioData.json"); 
      // Si la réponse n’est pas correcte
      if (!response.ok) {
        throw new Error(`Erreur réseau : ${response.status} ${response.statusText}`);
      }

      return await response.json(); 
    } catch (error) {
      console.error("Erreur lors du chargement des données du portfolio :", error);
      throw error;
    }
  }
