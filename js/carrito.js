const tocarCarrito = () => {
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
    <span class="restar"> - </span>
    <p>Cantidad: ${producto.cantidad}</p>
    <span class="sumar"> + </span>
    <p> Total: $ ${producto.cantidad * producto.precio}</p>
    <span class="borrar-producto"> ❌ </span>
    

    `;

    modalContainer.append(carritoContenido);

    let restar = carritoContenido.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (producto.cantidad != 1) {
        producto.cantidad--;
      }
      guardarLocal();
      tocarCarrito();
    });

    let sumar = carritoContenido.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      producto.cantidad++;
      guardarLocal();
      tocarCarrito();
    });

    let eliminar = carritoContenido.querySelector(".borrar-producto");

    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalCompras = document.createElement("div");
  totalCompras.className = "total-contenido";
  totalCompras.innerHTML = `El total a pagar es de: $ ${total}`;
  modalContainer.append(totalCompras);
};

verCarrito.addEventListener("click", tocarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id == id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  });

  contadorCarrito();

  tocarCarrito();
};

const contadorCarrito = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
};
