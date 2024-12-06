const EID_LENGTH = 8;
const ELVEN_SEX = ["1", "2", "3"];
const numericStringPattern = /^\d+$/;
const MODULUS = 97;
const CONTROL_KEY_LENGTH = 2;
const ZERO_PADDING_CHAR = "0";

type Validator = (eid: string, eidPart?: string) => boolean;
type Range = { start: number; end?: number };

export const validateEID = (eid: string) => {
  if (isEmpty(eid)) return false;
  const extractEIDPartAndValidate = extractPartIfNecessaryAndValidate(eid);

  const validatorDescriptors: [Validator, Range?][] = [
    [isLengthValid],
    [isOnlyDigits, { start: 0, end: 8 }],
    [isValidSexDigit, { start: 0, end: 1 }],
    [isValidEIDYear, { start: 1, end: 3 }],
    [isControlKeyValid, { start: 6, end: 8 }],
  ];
  return validatorDescriptors.every(([validator, range]) =>
    extractEIDPartAndValidate(range)(validator)
  );
};

const isValidSexDigit: Validator = (eid: string) => {
  const sexDigit = eid.substring(0, 1);
  return ELVEN_SEX.includes(sexDigit);
};

const isEmpty: Validator = (eid: string) => eid === null || eid === "";

const isLengthValid: Validator = (eid: string) => eid.length === EID_LENGTH;

const isOnlyDigits: Validator = (eid: string) => numericStringPattern.test(eid);

const isValidEIDYear: Validator = (eid: string, yearPart?: string) => {
  return isOnlyDigits(yearPart);
};

const isControlKeyValid: Validator = (eid: string, controlKeyPart?: string) => {
  const eidPrefix = eid.substring(0, 6);

  const modulo = parseInt(eidPrefix, 10) % MODULUS;
  const complementedValue = (MODULUS - modulo)
    .toString()
    .padStart(CONTROL_KEY_LENGTH, ZERO_PADDING_CHAR);

  return complementedValue === controlKeyPart;
};

const extractPartIfNecessaryAndValidate =
  (eid: string) => (range?: Range) => (eidValidatorFn: Validator) =>
    eidValidatorFn(eid, eid.substring(range?.start ?? 0, range?.end));
