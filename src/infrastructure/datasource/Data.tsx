export class Data {

    private _id: number;
    private _label: string;
    private _url: string;

    constructor(id: number, label: string, url: string) {
        this._id = id;
        this._label = label;
        this._url = url;
    }

    get id(): number {
        return this._id;
    }

    get label(): string {
        return this._label;
    }

    get url(): string {
        return this._url;
    }

}