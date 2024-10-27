import { APIGatewayProxyResult } from 'aws-lambda';

import { generateResponse } from '@helpers/functions';

export const getCurrentAndSave = async (): Promise<APIGatewayProxyResult> => {
    try {
        const testBody = { test: 'asdasdasd' };
        return generateResponse(200, testBody);
    } catch (error) {
        // TODO: Handle exceptions
        const err = error as Error;
        return generateResponse(500, {}, err);
    }
};
