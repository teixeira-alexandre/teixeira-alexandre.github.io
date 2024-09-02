// Exibe a seção selecionada e oculta as outras
function showSection(sectionId) {
  // Oculta todas as seções
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Exibe a seção selecionada
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

// Exibe a seção "Sobre Mim" ao iniciar a página
window.onload = () => {
  showSection("sobre");
};
