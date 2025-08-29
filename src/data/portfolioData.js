

/* Imports images : Portraits*/
import prt1 from "../assets/images/portfolio/prt-1.webp";
import prt2 from "../assets/images/portfolio/prt-2.webp";
import prt3 from "../assets/images/portfolio/prt-3.webp";
import prt4 from "../assets/images/portfolio/prt-4.webp";
import prt5 from "../assets/images/portfolio/prt-5.webp";
import prt6 from "../assets/images/portfolio/prt-6.webp";

/*Imports images : Voyages*/
import voy1 from "../assets/images/portfolio/voy-1.webp";
import voy2 from "../assets/images/portfolio/voy-2.webp";
import voy3 from "../assets/images/portfolio/voy-3.webp";
import voy4 from "../assets/images/portfolio/voy-4.webp";
import voy5 from "../assets/images/portfolio/voy-5.webp";
import voy6 from "../assets/images/portfolio/voy-6.webp";

/*Imports images : Editorial*/
import mode1 from "../assets/images/portfolio/mode-1.webp";
import mode2 from "../assets/images/portfolio/mode-2.webp";
import mode3 from "../assets/images/portfolio/mode-3.webp";
import mode4 from "../assets/images/portfolio/mode-4.webp";
import mode5 from "../assets/images/portfolio/mode-5.webp";
import mode6 from "../assets/images/portfolio/mode-6.webp";

/*Imports images : Événement*/
import eve1 from "../assets/images/portfolio/eve-1.webp";
import eve2 from "../assets/images/portfolio/eve-2.webp";
import eve3 from "../assets/images/portfolio/eve-3.webp";
import eve4 from "../assets/images/portfolio/eve-4.webp";

/*Vidéos*/
import mariageVideo from "../assets/video/mariage-2.mp4";
import mariagePoster from "../assets/video/mariage-2-poster.jpg";
import anniversaireVideo from "../assets/video/anniversaire.mp4";
import anniversairePoster from "../assets/video/anniversaire-poster.jpg";


export const portfolioData = {
  portrait: [
    { image: prt1, title: "Évasion naturelle", description: "Un instant suspendu en pleine nature, où la lumière caresse délicatement le visage du modèle, reflétant une sensation de liberté et d’harmonie." },
    { image: prt2, title: "Innocence et mystère", description: "Un regard perçant, à la fois doux et énigmatique, capturant l’essence de l’enfance entre lumière et ombre." },
    { image: prt3, title: "L’âme du vent", description: "Les cheveux en mouvement, un regard intense qui traduit à la fois la force et la fragilité, comme emporté par une brise légère." },
    { image: prt4, title: "Joie authentique", description: "Un sourire éclatant, marqué par les traces du temps et l’énergie de la vie, capturant un moment de bonheur sincère." },
    { image: prt5, title: "Mélancolie et profondeur", description: "Un portrait délicatement composé, où l’expression du modèle invite à une réflexion intérieure et à une douce mélancolie." },
    { image: prt6, title: "Simplicité et grâce", description: "Un jeu subtil d’ombres et de lumière mettant en valeur la douceur des traits et l’intensité du regard." },
  ],
  voyage: [
    { image: voy1, title: "Élégance parisienne", description: "Paris et son charme intemporel sous le regard de la Tour Eiffel." },
    { image: voy2, title: "Londres éternelle", description: "Big Ben, symbole majestueux au cœur de la capitale britannique." },
    { image: voy3, title: "New York, la ville qui ne dort jamais", description: "Au cœur de Manhattan, entre modernité et effervescence." },
    { image: voy4, title: "Tranquillité à Königssee", description: "Naviguer sur le lac Königssee, un joyau caché des Alpes bavaroises." },
    { image: voy5, title: "Sur la route de Monument Valley", description: "À travers les paysages mythiques de l’Ouest américain, l’aventure prend tout son sens." },
    { image: voy6, title: "Crépuscule sur les Andes", description: "Quand le soleil embrase les sommets, la nature dévoile toute sa splendeur." },
  ],
  editorial: [
    { image: mode1, title: "Expression brute", description: "Un mur texturé, un corps en mouvement, un instant suspendu. Cette photo capte l’énergie et l’authenticité du moment." },
    { image: mode2, title: "Élégance naturelle", description: "Des coupes simples, des tissus doux, une lumière pure. Une ambiance apaisante qui valorise la beauté dans la sobriété." },
    { image: mode3, title: "L’art du récit visuel", description: "L’image allie intention et créativité. Chaque détail invite à imaginer une histoire." },
    { image: mode4, title: "Couvertures du monde", description: "Un assemblage de magazines venus d’ailleurs. Une richesse visuelle entre styles, récits et horizons." },
    { image: mode5, title: "Élégance signée Chanel", description: "Parfum, gants et accessoires incarnant l’essence du chic intemporel." },
    { image: mode6, title: "Lignes pures de Dior", description: "La simplicité élégante d’un sac Dior pour une allure sophistiquée." },
  ],
  evenement: [
    { image: eve1, title: "Échange professionnel", description: "Geste, focus, interaction : l’instant d’un dialogue en entreprise." },
    { image: eve2, title: "Expérience de marque", description: "Un moment fort de présentation, au croisement du style et de la communauté." },
    { image: eve3, title: "Accueil séminaire", description: "Distribution de badges et documentation, premier point de contact d’un événement structuré." },
    { image: eve4, title: "Innocence et élégance", description: "Un mariage rempli d’amour et de complicité, où les mariés célèbrent leur union avec force." },
    { type: "video", video: mariageVideo, poster: mariagePoster, title: "Les coulisses du grand jour", description: "Préparatifs vibrants capturant l’émotion avant l’événement." },
    { type: "video", video: anniversaireVideo, poster: anniversairePoster, title: "Joyeux anniversaire en or", description: "Moments de fête autour d’une nouvelle décennie, remplis de sourires sincères." },
  ],
};
