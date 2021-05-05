/* eslint-disable */

export const convertToMoney = (num: any, decimal = 0) => {
  if (!num && num !== 0 || num == true) {
    return '';
  }
  if (typeof num === 'string') {

    num = parseInt(num);
  }
  num = num.toFixed(decimal);
  return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const convertWithDecimal = (num:number | string) => {
  if (!num && num !== 0) {
    return ''
  }
  let stringNum = num.toString();
  const [full, decimal] = stringNum.split('.');
  const formatFull = full.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return `${formatFull}${decimal ? '.': ''}${decimal ?? ''}`
}

export const moneyToInt = (money: string) => { 
  //console.log(money, typeof money)
  if (!money || money === "boolean" ) {
    return 0;
  } else {
    const num = money.replace(/,/g, '');
    return parseInt(num);
  }
}
