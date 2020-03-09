export class Customer {
    id: number;
    name: string;
    type:string;
    countryId:number;
    stateId:number;
    cityId:number;
    address:string;
    phoneNo:string;
    email:string;
    password:string;
    constructor(name, type, countryId, stateId,cityId,address,phoneNo,email,password) {
        this.id = null;
        this.name = name;
        this.type=type;
        this.countryId=countryId;
        this.stateId=stateId;
        this.cityId=cityId;
        this.address=address;
        this.phoneNo=phoneNo;
        this.email=email;
        this.password=password

    }
}