/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let myMoney = [0,0,0];
    for(let i=0;i<bills.length;i++){
        if(bills[i] === 5){
            myMoney[0]+=1;
        }
        else if(bills[i] === 10){
            if(myMoney[0]>=1){
                myMoney[0] -= 1;
            }
            else{
                return false;
            }
            myMoney[1] += 1;
        }
        else{
            if(myMoney[1]>=1){
                myMoney[1] -= 1;
                if(myMoney[0]>=1){
                    myMoney[0] -= 1;
                }
                else{
                    return false;
                }
            }
            else{
                if(myMoney[0]>=3){
                    myMoney[0] -= 3;
                }
                else{
                    return false;
                }
            }
            myMoney[2] += 1;
        }
    }
    return true;
};