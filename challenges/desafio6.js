// Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
db.produtos.find(
  { $and: [{ curtidas: { $lt: 100, $gt: 10 } }] },
  { nome: true, _id: false, curtidas: true },
); 