document.getElementById("moveButton").addEventListener("click", function() {
    // Obținem secțiunea care trebuie mutată
    var movedSection = document.getElementById("movedSection");
  
    // Verificăm dacă secțiunea este deja mutată
    if (movedSection.classList.contains("hidden")) {
      // Dacă este ascunsă, o afișăm și scoatem clasa de ascundere
      movedSection.classList.remove("hidden");
    } else {
      // Altfel, o ascundem și adăugăm clasa de ascundere
      movedSection.classList.add("hidden");
    }
  });