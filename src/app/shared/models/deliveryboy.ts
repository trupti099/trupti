export class DeliveryBoy {
    id: number;
    //user_id: number;
   // parcel_id:number;
    firstname: string;
    lastname: string;
    email: string;
    country_id:number;
    state_id:number;
    city_id:number;
    contact: string;
    address: string;
    role: string;
    datePicker: string;
   // profile: string;
    
    constructor(firstname,lastname,email,country_id,state_id,city_id,contact ,address,role,datePicker) {
        this.id = null;
        //this.user_id = user_id;
        //this.parcel_id=parcel_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email=email;
        this.country_id=country_id;
        this.state_id=state_id;
        this.city_id=city_id;
        this.contact=contact;
        this.address=address;
        this.role=role;
        this.datePicker=datePicker;
      //  this.profile=profile;
      
    }
}
