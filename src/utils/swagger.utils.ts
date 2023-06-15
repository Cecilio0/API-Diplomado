import 'dotenv/config';

export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Backend API",
            version: "1.0.0",
            description: "A simple express library API"
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}