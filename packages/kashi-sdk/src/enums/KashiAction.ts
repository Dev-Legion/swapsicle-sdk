export enum KashiAction {
  ADD_ASSET = 1,
  REPAY = 2,
  REMOVE_ASSET = 3,
  REMOVE_COLLATERAL = 4,
  BORROW = 5,
  GET_REPAY_SHARE = 6,
  GET_REPAY_PART = 7,
  ACCRUE = 8,

  // Functions that don't need accrue to be called
  ADD_COLLATERAL = 10,
  UPDATE_EXCHANGE_RATE = 11,

  // Function on BentoBox
  BENTO_DEPOSIT = 20,
  BENTO_WITHDRAW = 21,
  BENTO_TRANSFER = 22,
  BENTO_TRANSFER_MULTIPLE = 23,
  BENTO_SETAPPROVAL = 24,

  // Any external call (except to BentoBox)
  CALL = 30,
}
