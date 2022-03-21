const connection = require("../Config/Sequelize")


const index = (req, res) => {
    connection.query({
       sql: 'SELECT * FROM buku', 
    }, _response(res));
}

const _response = (res) => {
    return(error, result) => {
        if(error) {
            res.send({
            status: 'failed',
            message: message
            })
        } else {
            res.send({
            status: 'success',
            message: result
            })
        }
    }
}

module.exports = {
    index
}