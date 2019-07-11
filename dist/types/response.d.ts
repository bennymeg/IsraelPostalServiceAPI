export interface Price {
    "Pweight": string;
    "Pqty": string;
    "Pprice": string;
    "Ptotal": string;
    "commentsNo": string;
    "comments": Array<Comment>;
}
export interface Comment {
    "ctext"?: string;
    "cno": string;
}
export interface Response {
    "status": number;
    "statusDesc": string;
    "mitem": string;
    "service": string;
    "cname": string;
    "pcode": string;
    "weight": string;
    "qty": string;
    "prices": Price;
    "commTextsNo": string;
    "commTexts": Array<Comment>;
}
