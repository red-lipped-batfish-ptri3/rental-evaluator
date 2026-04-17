import path from "path";
const dirname = import.meta.dirname;
import * as dotenv from "dotenv";

const env = dotenv.config({path: path.resolve(dirname, '.env')})

function envOrThrow(args) {
    const value = process.env[args]

    if(!value){
        throw new Error(`Environment variable ${value} is not set`)
    }
    return value
}

const password = encodeURIComponent(envOrThrow("MONGO_DB_ADMIN_PASSWD"))
const user = envOrThrow("MONGO_DB_USER")

const uri = `mongodb+srv://${user}:${password}@cluster0.zrzdhso.mongodb.net/?appName=Cluster0`;


const config = {
    uri: uri,
    mapboxApiKey: envOrThrow("MAPBOX_API_KEY")
}

export default config;
