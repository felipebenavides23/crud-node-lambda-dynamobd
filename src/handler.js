"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "realizando pruebas para lambda",
        input: event,
      },
      null,
      2
    ),
  };
};
