import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Example Template for Nodejs and TypeScript",
    description: "Swagger docs for node.js and typescript template",
  },
  servers: [
    {
      url: "http://localhost:4000",
      description: "",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/presentation/http/routes/todos.routes.ts",
];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
