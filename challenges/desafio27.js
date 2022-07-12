// Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
db.produtos.find({ nome: { $regex: /Mc/ } }).count(); // ref: https://regexr.com/