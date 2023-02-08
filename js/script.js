const ropaComprar = document.getElementById("ropaComprar");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

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
    carrito.push({
      id: producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito de compras</h1>`;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((producto) => {
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "modal-contenido";
    carritoContenido.innerHTML = `
  <img src="${producto.img}">
  <h2>${producto.nombre}</h3>
  <p>$ ${producto.precio}</p>
  `;

    modalContainer.append(carritoContenido);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompras = document.createElement("div");
  totalCompras.className = "total-contenido";
  totalCompras.innerHTML = `El total a pagar es de: $ ${total}`;
  modalContainer.append(totalCompras);
});
