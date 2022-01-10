export class StoreInfo {
    constructor(public storeName:string
                ,public headerImgURL:string
                ,public storeServices: string[]
                ,public isOpen:boolean
                ,public establishDate?:Date
                ,public capital?:number
                )
    {}
}
