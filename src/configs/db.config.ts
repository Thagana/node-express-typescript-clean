import dotenv from 'dotenv';

dotenv.config(); 

const config = {
  DATABASE_CONNECTION: process.env.DATABASE_URI || "",
};

export default config;