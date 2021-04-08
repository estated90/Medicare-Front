export class Patient {
  constructor(
    public id: number,
    public family: string,
    public given: string,
    public dob: Date,
    public sex: string,
    public address: string,
    public phone: string) {}

 }
