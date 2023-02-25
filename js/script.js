const ropaComprar = document.getElementById("ropaComprar");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
  let contenido = document.createElement("div");
  contenido.className = "card";
  contenido.innerHTML = `
    <img src="${producto.img}">
    <h2> ${producto.nombre}</h2>
    <p class="precio"> $${producto.precio} </p>
    `;

  ropaComprar.append(contenido);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "comprar";

  contenido.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProducto) => repeatProducto.id == producto.id
    );

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id == producto.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: producto.id,
        img: producto.img,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad,
      });
    }

    console.log(carrito);
    contadorCarrito();
    guardarLocal();
  });
});

//Local Storage //
//Set Item

const guardarLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//Get Item
