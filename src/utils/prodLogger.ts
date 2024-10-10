import {format, createLogger} from 'winston';
import configs from '../configs/configs';
import Sentry from 'winston-transport-sentry-node';

const {timestamp, combine, errors, json} = format;

const options = {
	sentry: {
		dsn: configs.SENTRY_DNS,
	},
	level: 'error'
  };

function buildProdLogger() {
	return createLogger({
		format: combine(timestamp(), errors({stack: true}), json()),
		transports: [
			new Sentry(options)
		],
	});
}

export default buildProdLogger;