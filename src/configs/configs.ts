import dotenv from'dotenv';

dotenv.config();

const devConfig = { 
    SECRET_TOKEN: process.env.SECRET_TOKEN || '',
    SENTRY_DNS: process.env.SENTRY_DNS || ''
}

const prodConfig = {
    SECRET_TOKEN: process.env.SECRET_TOKEN || '',
    SENTRY_DNS: process.env.SENTRY_DNS || ''
}

export default process.env.NODE_ENV === 'production' ? prodConfig : devConfig;