const produtosQuarto = [
    {
        img: "Images/modeloCama.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Cama King Size",
        preco_antigo: 799.00,
        preco_novo: 599.99
    },
    {
        img: "Images/camaBranca.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Cama Queen Size",
        preco_antigo: 499.00,
        preco_novo: 399.99
    },
    {
        img: "Images/sofaCama.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Sofá para 3 pessoas",
        preco_antigo: 129.00,
        preco_novo: 99.99
    },
    {
        img: "Images/comodaComEseplho.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Cômoda com Espelho",
        preco_antigo: 349.00,
        preco_novo: 279.99
    },
    {
        img: "Images/poltrona.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Poltrona Conforto Total",
        preco_antigo: 349.00,
        preco_novo: 299.99
    },
    {
        img: "Images/mesaCabeceira.jpg",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Mesa de Cabeceira Elegante",
        preco_antigo: 79.00,
        preco_novo: 59.99
    },
    {
        img: "Images/tapete.png",
        marca: "LA REDOUTE INTERIEURS",
        nome: "Tapete Macio",
        preco_antigo: 150.99,
        preco_novo: 89.99
    },

];

const elementoListaProdutos = document.getElementById("products-list");

produtosQuarto.forEach(produto => {
    elementoListaProdutos.innerHTML += `<div class='card box border-light col-sm-4 mx-3 mt-2' style='width: 18rem;'>
                                        <a href='product.html'>
                                            <img src='${produto.img}' class='card-img-top' alt='${produto.nome}' height='200'>
                                        </a>
                                        <div class='card-body'>
                                            <p class='card-text'>
                                                ${produto.marca}
                                                <br>
                                                ${produto.nome}
                                                <br>
                                                <s class='oldPrice'>${produto.preco_antigo} €</s> -${100 - Math.round(produto.preco_novo * 100 / produto.preco_antigo)}%
                                                <br>
                                                <label class='newPrice'>${produto.preco_novo} €</label>
                                            </p>
                                        </div>
                                    </div>`;
});