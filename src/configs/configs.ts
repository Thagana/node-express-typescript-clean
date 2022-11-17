import dotenv from'dotenv';

dotenv.config();

const devConfig = { 
    SECRET_TOKEN: process.env.SECRET_TOKEN || ''
}

const prodConfig = {
    SECRET_TOKEN: process.env.SECRET_TOKEN || ''
}

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;