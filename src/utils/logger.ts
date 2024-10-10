import prodLogger from './prodLogger';
import devLogger from './devLogger';

const logger = process.env.NODE_ENV === 'production' ? prodLogger : devLogger;

export default logger();