import axios, { AxiosError } from 'axios';
import moment from 'moment';

import { BanxicoSeries, Endpoint } from '@enums/enums';
import { banxicoUrl, TOKEN } from '@helpers/ProjectSetup';
import { ApiResponse } from '@interfaces/BanxicoInterfaces';
import { ExchangeInterface } from '@interfaces/interfaces';

export const getCurrentValue = async () => {
    try {
        const completePath = `${banxicoUrl}/${BanxicoSeries.CURRENT}/datos/oportuno?token=${TOKEN}`;
        const banxicoResponse: ApiResponse = (await axios.get(completePath)).data;
        const parsedData = parseBanxicoRes(banxicoResponse, Endpoint.CURRENT);
        // TODO: Save in dynamo
        return parsedData;
    } catch (error) {
        throw new AxiosError();
    }
};

export const getHistoricValue = async (days: number) => {
    try {
        const startDate = moment().subtract(days, 'days').format('YYYY-MM-DD');
        const endDate = moment().format('YYYY-MM-DD');
        const completePath = `${banxicoUrl}/${BanxicoSeries.HISTORIC}/datos/${startDate}/${endDate}?token=${TOKEN}`;
        const banxicoResponse: ApiResponse = (await axios.get(completePath)).data;
        const parsedData = parseBanxicoRes(banxicoResponse, Endpoint.HISTORIC);
        // TODO: Save in dynamo
        return parsedData;
    } catch (error) {
        throw new AxiosError();
    }
};

export const getAverageValue = async (days: number) => {
    try {
        const startDate = moment().subtract(days, 'days').format('YYYY-MM-DD');
        const endDate = moment().format('YYYY-MM-DD');
        const completePath = `${banxicoUrl}/${BanxicoSeries.AVERAGE}/datos/${startDate}/${endDate}?token=${TOKEN}`;
        const banxicoResponse: ApiResponse = (await axios.get(completePath)).data;
        const parsedData = parseBanxicoRes(banxicoResponse, Endpoint.AVERAGE);
        // TODO: Save in dynamo
        return parsedData;
    } catch (error) {
        throw new AxiosError();
    }
};

const parseBanxicoRes = (data: ApiResponse, endpoint: number) => {
    const { series } = data.bmx;
    const { datos } = series[0];
    switch (endpoint) {
        case Endpoint.CURRENT: {
            const lastData = datos[0];
            const { dato, fecha } = lastData;
            return {
                date: fecha,
                value: dato,
            };
        }
        case Endpoint.HISTORIC: {
            const array: ExchangeInterface[] = [];
            datos.forEach((element) => {
                array.push({
                    date: element.fecha,
                    value: element.dato,
                });
            });
            return array;
        }
        case Endpoint.AVERAGE: {
            let average = 0,
                counter = 0;
            datos.forEach((element) => {
                average += Number(element.dato);
                counter++;
            });
            return (average / counter).toFixed(2);
        }
        default:
            return data;
    }
};
