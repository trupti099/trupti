export class Country{
    id:number;
    name:string;
    sortName:string;
    phoneCode:number;
    constructor(name,sortName,phoneCode){
        this.id=null;
        this.name=name;
        this.sortName=sortName;
        this.phoneCode=phoneCode;
    }
}