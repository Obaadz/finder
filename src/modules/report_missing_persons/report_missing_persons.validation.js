import joi from "joi";
export const addMissingPerson = joi
  .object({
    gender: joi.string().valid("Male", "Female").required(),
    age: joi.number().integer().min(1).max(100),
    city: joi.string().required(),
    address: joi.string().required(),
    fullName: joi.string().required(),
    fatherName: joi.string().required(),
    motherName: joi.string().required(),
    class: joi.string().required(),
  })
  .required();

export const addFoundPerson = joi
  .object({
    gender: joi.string().valid("Male", "Female").required(),
    age: joi.number().integer().min(1).max(100),
    city: joi.string().required(),
    address: joi.string().required(),
    fullName: joi.string().required(),
    fatherName: joi.string().required(),
    motherName: joi.string().required(),
    class: joi.string().required(),
  })
  .required();
export const showMoreCheckFace = joi
  .object({
    _id: joi.string().required(),
  })
  .required();
export const searchMissingAndFoundPersonsValidation = joi
  .object({
    page: joi.string().required(),
  })
  .required();
export const searchMissingAndFoundPersonsValidationWithName = joi
  .object({
    keyword: joi.string().required(),
    page: joi.string().required(),
  })
  .required();
export const searchMissingAndFoundPersonsValidationWithArea = joi
  .object({
    country: joi.string().required(),
    page: joi.string().required(),
  })
  .required();
export const searchMissingAndFoundPersonsValidationWithYear = joi
  .object({
    year: joi.string().required(),
    page: joi.string().required(),
  })
  .required();
export const getSingleMissingPersonAndFoundPerson = joi
  .object({
    reportId: joi.string().required(),
  })
  .required();
