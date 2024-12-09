'use strict';

const logger = require('./utils/logger.js')('main'); // при запуску require викликає ф-цію з аргументом 'main' та повертає нову ф-цію, пов'язану з простором імен 'main', яку далі ми використовуємо.
logger.info('the script is running!');
