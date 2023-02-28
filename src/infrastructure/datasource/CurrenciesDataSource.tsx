import { DataSource } from "./DataSource";
import { Data } from "./Data";
import { AxiosResponse } from "axios";

export class CurrenciesDataSource extends DataSource {

    constructor() {
        super("http://localhost:3001/currencies");
    }

    mapResponse(data: AxiosResponse<any, any>): Promise<Data[]> {
        return Promise.resolve([]);
    }

}