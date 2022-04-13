import {
    visaPrefixList,
    mastercardPrefixList,
    discoverPrefixList,
    amexPrefixList,
    unionPayPrefixList,
    jcbPrefixList
} from './card-prefixes'
import { VISA, MC, MAESTRO, AMEX, JCB, DISCOVER, UNION_PAY, CardTypes, CardPaymentSystems } from '@constants/card.constant'

export class CardGenerator {
    private readonly visaPrefixList = visaPrefixList
    private readonly mastercardPrefixList = mastercardPrefixList
    private readonly discoverPrefixList = discoverPrefixList
    private readonly amexPrefixList = amexPrefixList
    private readonly unionPayPrefixList = unionPayPrefixList
    private readonly jcbPrefixList = jcbPrefixList

    private readonly ccCardMap = {
        [VISA]: this.visaPrefixList,
        [MC]: this.mastercardPrefixList,
        [MAESTRO]: this.mastercardPrefixList,
        [AMEX]: this.amexPrefixList,
        [JCB]: this.jcbPrefixList,
        [DISCOVER]: this.discoverPrefixList,
        [UNION_PAY]: this.unionPayPrefixList,
    }

    reverseString(str) {
        if (!str) return '';
        return str.split("").reverse().join("");
     }

    private completedNumber(prefix, length) {
        let ccNumber = prefix;

        while ( ccNumber.length < (length - 1) ) {
            ccNumber += Math.floor(Math.random()*10);
        }

        const reversedCCnumberString = this.reverseString( ccNumber );
        const reversedCCnumber = []

        for (let i=0; i < reversedCCnumberString.length; i++ ) {
            reversedCCnumber[i] = parseInt( reversedCCnumberString.charAt(i) );
        }

        let sum = 0;
        let pos = 0;

        while ( pos < length - 1 ) {
            let odd = reversedCCnumber[ pos ] * 2;
            if ( odd > 9 ) {
                odd -= 9;
            }

            sum += odd;

            if ( pos != (length - 2) ) {
                sum += reversedCCnumber[ pos +1 ];
            }
            pos += 2;
        }

        const checkDigit = (( Math.floor(sum/10) + 1) * 10 - sum) % 10;
        ccNumber += checkDigit;

        return ccNumber;
    }

    getCreditCardNumber(prefixList) {
        // const length = Math.floor(Math.random() * (16 - 13 + 1)) + 13;
        const length = 16;
        const randomArrayIndex = Math.floor(Math.random() * prefixList.length);
        let ccNumber = prefixList[ randomArrayIndex ];

        return this.completedNumber(ccNumber, length)
    }

    getExpireDate() {
        const now = new Date();
        return now.setDate(now.getDate() + 24 * 14);
    }

    getCvvNumber() {
        Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    }

    generateCard(type: CardTypes, paymentSystem: CardPaymentSystems) {
        const number = this.getCreditCardNumber(this.ccCardMap[paymentSystem])
        const cvv = this.getCvvNumber()
        const expDate = this.getExpireDate()

        return {
            type,
            paymentSystem,
            number,
            cvv,
            expDate
        }
    }
}