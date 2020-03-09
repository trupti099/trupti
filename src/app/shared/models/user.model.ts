export class User{
    id: number;
    name: string;
    userType:string;
    region:string;
    countryId:number;
    stateId:number;
    cityId:number;
    address:string;
    phoneNo:string;
    email:string;
    websiteURL:string;
    credit:number;
    country_id:any;
    state_id:any;
    city_id:any;
    phone_no:any;
    website_url:any;
    
  

  constructor(name, userType,region, countryId, stateId, cityId, address, phoneNo, email, websiteURL,credit) {
        this.id = null;
        this.name = name;
        this.userType = userType;
        this.region=region;
        this.countryId = countryId;
        this.stateId= stateId;
        this.cityId = cityId;
        this.address = address;
        this.phoneNo = phoneNo;
        this.email = email;
        this.websiteURL= websiteURL;
        this.credit = credit;
    }
}