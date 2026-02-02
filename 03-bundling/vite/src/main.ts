import classes from "./mystyles.module.css";

console.log("Entorno actual:", import.meta.env.VITE_ENV_NAME);
console.log("API URL:", import.meta.env.VITE_API_URL);

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const h1 = document.createElement("h1");
  h1.classList.add(classes.title);
  h1.textContent = "Vite con TypeScript";
  app.appendChild(h1);
}
