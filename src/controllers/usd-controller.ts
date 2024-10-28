import { APIGatewayProxyResult } from 'aws-lambda';

import { getCurrentValue, getHistoricValue, getAverageValue } from '@helpers/BanxicoAPI';
import { generateResponse } from '@helpers/functions';

export const getCurrentAndSave = async (): Promise<APIGatewayProxyResult> => {
    try {
        const current = await getCurrentValue();
        return generateResponse(200, current);
    } catch (error) {
        // TODO: Handle exceptions
        const err = error as Error;
        return generateResponse(
            500,
            {
                error: err.message,
            },
            err,
        );
    }
};

export const getHistoricAndSave = async (): Promise<APIGatewayProxyResult> => {
    try {
        const historicDays = 17;
        const historic = await getHistoricValue(historicDays);
        return generateResponse(200, historic);
    } catch (error) {
        // TODO: Handle exceptions
        const err = error as Error;
        return generateResponse(
            500,
            {
                error: err.message,
            },
            err,
        );
    }
};

export const getAverageValues = async (): Promise<APIGatewayProxyResult> => {
    try {
        const lastTenDays = await getAverageValue(15);
        const lastMonth = await getAverageValue(40);
        return generateResponse(200, {
            lastTenDays,
            lastMonth,
        });
    } catch (error) {
        // TODO: Handle exceptions
        const err = error as Error;
        return generateResponse(
            500,
            {
                error: err.message,
            },
            err,
        );
    }
};
