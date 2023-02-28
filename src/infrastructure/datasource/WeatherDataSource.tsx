import { DataSource } from "./DataSource";
import { Data } from "./Data";
import { AxiosResponse } from "axios";

export class WeatherDataSource extends DataSource {

    constructor() {
        super("http://localhost:3001/weather");
    }

    mapResponse(data: AxiosResponse<any, any>): Promise<Data[]> {
        return Promise.resolve([]);
    }

}