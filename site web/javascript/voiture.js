const voitures = [
    {
      id: 1,
      marque: "Infinity",
      kilometrage : 4500,
      modele: "Q50",
      annees: 2023,
      coleur: "Noir",
      prix: 50000,
    },
    
  {
      id: 2,
      marque: "Mercedes",
      kilometrage : 1000,
      modele: "A45 AMG",
      annees: 2020,
      coleur: "Gris Nardo",
      prix: 35000,
      image: "Voiture 2"
    },
    
  {
      id: 3,
      marque: "BMW",
      kilometrage : 200,
      modele: "M8 pack M",
      annees: 2023,
      coleur: "Bleu",
      prix: 65000,
    }
  ];
function AffichageInfo(voiture) {
    const voitureInfoHTML = `
      <h2>${voiture.marque} ${voiture.modele}</h2>
      <p> Kilométrage : ${voiture.kilometrage} Km  </p>
      <p> Année: ${voiture.annees} </p>
      <p> Coleur: ${voiture.coleur}</p>
      <p> Prix: ${voiture.prix} €</p>
    `;
    document.getElementById("car-info").innerHTML= voitureInfoHTML;    
}
document.addEventListener("DOMContentLoaded", function() {
  const btnRetour = document.getElementById("btn-retour");
  btnRetour.addEventListener("click", function() {
    window.location.href = document.referrer;
  });
});
