//  Remova o campo curtidas do item Big Mac
db.produtos.updateMany({ namo: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });