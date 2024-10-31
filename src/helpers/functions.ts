import { APIGatewayProxyResult } from 'aws-lambda';

export const generateResponse = (statusCode: number, body: any, error?: Error): APIGatewayProxyResult => {
    if (statusCode !== 200) {
        const errMsg = error ? error.message : 'An error occurred';
        logErrorToCloudWatch(statusCode, errMsg);
    }
    return {
        statusCode,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
    };
};

const logErrorToCloudWatch = (statusCode: number, error: string) => {
    console.error(statusCode, error);
};
