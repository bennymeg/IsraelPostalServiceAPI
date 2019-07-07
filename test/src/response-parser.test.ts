import { ResponseParser } from '../../src/response-parser';
import { Response } from '../../@types/src/response';
import { assert } from 'chai';

let response: string = `{"status":"1","statusDesc":"","mitem":"משלוח דואר לחול - חבילה","service":"דואר אויר - ","cname":"ספרד","pcode":"3","weight":"20","qty":"2","prices":[{"Pweight":"עד 500 גרם","Pqty":"1","Pprice":"56.10","Ptotal":"112.20","commentsNo":"2","comments":[{"cno": "1"},{"cno": "2"}]}],"commTextsNo":"2","commTexts":[{"cno":"1","ctext":"המחיר"},{"cno":"2","ctext":"מיועד"}]}`;
let parser: ResponseParser = new ResponseParser(response);

describe('Response Parsing', () => {
    it('should return shipment price group', () => {
        let result: string = parser.getPriceGroup();

        assert.equal(result, '3');
    });

    it('should return individual package shipment price', () => {
        let result: number = parser.getPrice();

        assert.equal(result, 56.10);
    });

    it('should return entire shipment total price', () => {
        let result: number = parser.getTotalPrice();

        assert.equal(result, 112.20);
    });

    it('should return true if there is comments', () => {
        let result: boolean = parser.hasComments();

        assert.isTrue(result);
    });

    it('should retrieve all the comments', () => {
        let result: string[] = parser.getComments();

        assert.equal(result.length, 2);
    });

    it('return response raw data', () => {
        let result: Response = parser.getRawData();

        assert.exists(result);
    });
});