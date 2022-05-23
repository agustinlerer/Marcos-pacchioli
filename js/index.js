const portfolio_navegacionhamb = document.querySelector (".portfolio__navegacion--hamb");
const portfolio_navegacionlista = document.querySelector (".portfolio__navegacion--lista");

portfolio_navegacionhamb.addEventListener("click", () => {
    portfolio_navegacionlista.classList.toggle("portfolio__navegacion--animacion");
});
