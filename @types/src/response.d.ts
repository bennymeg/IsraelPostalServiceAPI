export interface Price { 
    "Pweight": string,
    "Pqty": string,         // number
    "Pprice": string,       // number
    "Ptotal": string,       // number
    "commentsNo": string,
    "comments": Array<Comment>
}

export interface Comment { 
    "ctext"?: string,
    "cno": string,          // number
}

export interface Response { 
    "status": number,       // number
    "statusDesc": string,
    "mitem": string,
    "service": string,
    "cname": string,
    "pcode": string,        // number
    "weight": string,       // number
    "qty": string,          // number
    "prices": Price,
    "commTextsNo": string,  // number
    "commTexts": Array<Comment>
}