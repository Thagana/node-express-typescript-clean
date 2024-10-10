import app from './app';


const PORT  = process.env.PORT || 4000;
const ENV = process.env.NODE_ENV || 'production';

const server = app.listen(PORT, () => console.log(`App is running on ${ENV} ${PORT}`));

export default server;