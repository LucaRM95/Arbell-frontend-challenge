export function loadComponent(containerId, filePath) {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(containerId).innerHTML = data;
        resolve();
      })
      .catch((error) => reject(`Error loading ${filePath}:`, error));
  });
}
