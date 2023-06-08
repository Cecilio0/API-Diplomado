import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI);
    console.log("se conecta a la base de datos");
}

export default dbConnect;