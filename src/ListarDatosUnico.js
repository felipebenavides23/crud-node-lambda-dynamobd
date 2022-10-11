const AWS = require("aws-sdk")

const ListarDatoUnico = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters

    const resultado = await dynamodb.get({
        TableName: "TablaPruebas",
        Key: {
            id
        }
    }).promise()

    const Dato = resultado.Item

    return {
        status: 200,
        body: Dato
    }

}


module.exports = {
    ListarDatoUnico
}