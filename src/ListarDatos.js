const AWS = require('aws-sdk')

const ListarDatos = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    const resultados = await dynamodb.scan({
        TableName: 'TablaPruebas'
    }).promise()

    const lisDatos = resultados.Items

    return {
        status: 200,
        body: { lisDatos }
    }
}

module.exports = {
    ListarDatos
}