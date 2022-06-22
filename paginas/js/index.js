const portfolio_navegacionhamb = document.querySelector (".navegacion__hamb");
const portfolio_navegacionlista = document.querySelector (".navegacion__lista");

portfolio_navegacionhamb.addEventListener("click", () => {
    portfolio_navegacionlista.classList.toggle("navegacion__animacion");
});
