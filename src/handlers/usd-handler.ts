import { getCurrentAndSave, getHistoricAndSave, getAverageValues } from '@controllers/usd-controller';

export const getCurrent = getCurrentAndSave;
export const getHistoric = getHistoricAndSave;
export const getAverage = getAverageValues;
