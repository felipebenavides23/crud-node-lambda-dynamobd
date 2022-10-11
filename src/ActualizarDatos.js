const AWS = require("aws-sdk")

const ActualizaDatos = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters
    const { estado, title, description } = JSON.parse(event.body)
    const respuesta = await dynamodb.update(
        {
            TableName: "TablaPruebas",
            Key: { id },
            UpdateExpression: "set estado = :estado, title = :title, description = :description ",
            ExpressionAttributeValues: {
                ":estado": estado,
                ":title": title,
                ":description": description
            },
            ReturnValues: "ALL_NEW"
        }
    ).promise()
    return {
        status: 200,
        doby: respuesta
    }
}
module.exports = {
    ActualizaDatos
}