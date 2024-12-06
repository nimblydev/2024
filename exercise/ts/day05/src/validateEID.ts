const EID_LENGTH = 8;
const ELVEN_SEX = ["1", "2", "3"];
const numericStringPattern = /^\d+$/;
const eidModulus = 97;

export const validateEID = (eid: string) => {
  const eidYearCode = eid?.substring(1, 3);
  const eidSexIdentifier = eid?.substring(0, 1);
  const eidCheckCharacter = eid?.substring(6, 8);
  const eidPrefix = eid?.substring(0, 6);

  return (
    !isEmpty(eid) &&
    !lengthIsInvalid(eid) &&
    isOnlyDigits(eid) &&
    sexDigitValidation(eidSexIdentifier) &&
    yearValdidation(eidYearCode) &&
    controlKeyValidation(eidPrefix, eidCheckCharacter)
  );
};

const sexDigitValidation = (sexDigit: string) => {
  return ELVEN_SEX.includes(sexDigit);
};

const isEmpty = (eid: string) => eid === null || eid === "";

const lengthIsInvalid = (eid: string) => eid.length !== EID_LENGTH;

const isOnlyDigits = (eid: string) => numericStringPattern.test(eid);

const yearValdidation = (year: string) => {
  return isOnlyDigits(year) && year.length === 2;
};

const controlKeyValidation = (eidPrefix: string, controlKey: string) => {
  const modulo = parseInt(eidPrefix, 10) % eidModulus;
  const complementedValue = (eidModulus - modulo).toString().padStart(2, "0");
  return complementedValue === controlKey;
};
