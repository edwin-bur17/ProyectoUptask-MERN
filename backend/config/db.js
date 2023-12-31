import mongoose from "mongoose";

// Conexión a la base de datos
const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `host: ${connection.connection.host} : puerto: ${connection.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1);
    }
}

export default conectarDB;