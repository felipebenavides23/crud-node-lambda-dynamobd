const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const addDatos = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient()

    let { title, description } = JSON.parse(event.body)
    console.log(JSON.parse(event.body))
    const creaciondato = new Date()
    const id = v4()

    const Datos = {
        id,
        title,
        description,
        creaciondato,
        estado: false
    }

    await dynamodb.put({
        TableName: 'TablaPruebas',
        Item: Datos
    }).promise()

    return {
        status: 200,
        body: JSON.stringify(Datos)
    }

}


module.exports = {
    addDatos
}