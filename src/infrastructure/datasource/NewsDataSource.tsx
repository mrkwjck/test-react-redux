import { DataSource } from "./DataSource";
import { Data } from "./Data";
import { AxiosResponse } from "axios";

export class NewsDataSource extends DataSource {

    constructor() {
        super("http://localhost:3001/news");
    }

    mapResponse(response: AxiosResponse<any, any>): Promise<Data[]> {
        return response.data.map((data: { id: number; title: string; url: string; }) =>
            new Data(data.id, data.title, data.url));
    }

}