import * as crypto from 'crypto';

// ****************************************************

const NUM = '0123456789';

function createMessageId() {
  const rnd = crypto.randomBytes(11);
  const value = new Array(11);
  const charsLength = NUM.length;

  for (let i = 0; i < value.length; i++) {
    if (i === 5) {
      value[5] = '-';
    } else {
      value[i] = NUM[rnd[i] % charsLength];
    }
  }

  return value.join('');
}

// ****************************************************

function formatPhoneNumber(number: string) {
  const digits = number.replace(/\D/g, '');
  const split = digits.split('');
  const result = split.map((item, index) => {
    if (index === 0) return `(${item}`;
    if (index === 2) return `${item}) `;
    if (index === 5) return `${item}-`;
    else return item;
  });
  return result.join('');
}

// ****************************************************

function removeNonDigits(input: string) {
  return input.replace(/\D/g, '');
}

// ****************************************************

function slugify(value: string) {
  const result = value.toLowerCase().split(' ');
  return result.join('-');
}

// ****************************************************

export { createMessageId, formatPhoneNumber, removeNonDigits, slugify };
