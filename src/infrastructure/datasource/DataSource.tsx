import { Data } from "./Data";
import axios, { AxiosResponse } from "axios";

export abstract class DataSource {

    private url: string

    protected constructor(url: string) {
        this.url = url;
    }

    async getData(): Promise<Data[]> {
        const lagTimeMs = (Math.floor(Math.random() * 3) + 1) * 1000;
        const response = await axios.get(this.url);
        await this.sleep(lagTimeMs)
        return this.mapResponse(response)
    }

    private async sleep(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    abstract mapResponse(data: AxiosResponse<any, any>): Promise<Data[]>

}