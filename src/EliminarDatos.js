const AWS = require("aws-sdk")

const EliminarDatos = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters

    await dynamodb.delete({
        TableName: "TablaPruebas",
        Key: { id }
    }).promise()

    return {
        status: 200,
        body: {
            mensaje: "se elimino con exito"
        }

    }
}

module.exports = {
    EliminarDatos
}
