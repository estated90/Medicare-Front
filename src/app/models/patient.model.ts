export class Patient {
  id!: number;
  family!: string;
  given!: string;
  dob!: Date;
  sex!: string;
  address!: string;
  phone!: string;

  constructor(family: string, given: string, dob: Date, sex: string, address: string, phone: string){
    this.family=family;
    this.given=given;
    this.dob=dob;
    this.sex=sex;
    this.address=address;
    this.phone=phone;
  }
}
