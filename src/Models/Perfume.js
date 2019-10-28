const getConnection = require('./Model.js');

const fetchAll = (callback) =>  {
    
    getConnection((error, db) => {
        db.collection('perfumes').find()
            .toArray()
            .then((datas) => {
                callback(undefined, datas);
            }).catch((err) => {
                callback(err, undefined);
            });
    });
};

const insert = ({nome, descricao, fabricante, preco, imagem}, callback) => {
    getConnection((error, db) => {
        
        db.collection('perfumes').insertOne({
            nome: nome, 
            descricao: descricao, 
            fabricante: fabricante, 
            preco: preco,
            imagem: imagem

        }).then((data) => {
            callback(undefined, data);
        }).catch((err) => {
            callback(err, undefined);
        });
    
    })    
}

module.exports = {
    fetchAll: fetchAll,
    insert: insert
}
