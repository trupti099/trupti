export class Parcel {
    id: number;
    senderId: number;
    senderName: string;
    senderPhoneNo: string;
    receiverId: string;
    receiverName: string;
    receiverPhoneNo: string;
    center: string;
    packageType: string;
    barCodeNo: string;
    weight: number;
    amount: number;
    charge: number;
    otherCharge: number;
    netAmount: number;
    remark: number;
    constructor(senderId, senderName, senderPhoneNo,receiverId,receiverName,receiverPhoneNo
                ,center,packageType,barCodeNo,weight,amount,charge,otherCharge,netAmount,remark
        ) {
        this.id = null;
        this.senderId = senderId;
        this.senderName = senderName;
        this.senderPhoneNo = senderPhoneNo;
        this.receiverId=receiverId;
        this.receiverName=receiverName;
        this.receiverPhoneNo=receiverPhoneNo;
        this.center=center;
        this.packageType=packageType;
        this.barCodeNo=barCodeNo;
        this.weight=weight;
        this.amount=amount;
        this.charge=charge;
        this.otherCharge=otherCharge;
        this.netAmount=netAmount;
        this.remark=remark;
    }
}
