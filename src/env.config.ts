import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
    weather_api_key: process.env.WHEATER_APIKEY || "e5d4fbb1cae04243a13203322231509"
}