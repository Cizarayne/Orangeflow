import Joi from "joi";

export const validateSignup = Joi.object({
  fullname: Joi.string().required().trim().min(3).max(100),
  username: Joi.string().required().trim().min(3).max(20),
  email: Joi.string().required().trim().email().min(10).max(50),
  phone: Joi.string().required().trim().min(10).max(16),
  gender: Joi.string().required().trim().min(4).max(6),
  password: Joi.string().required().trim().min(6).max(50),
});

export const validateLogin = Joi.object({
  email: Joi.string().email(),
  username: Joi.string(),
  phone: Joi.string(),
  password: Joi.string().required().trim().min(6).max(50),
}).or("email", "username", "phone");

export const validateChangePassword = Joi.object({
  currentpassword: Joi.string().required().trim().min(6).max(50),
  newpassword: Joi.string().required().trim().min(6).max(50),
  confirmnewpassword: Joi.string().required().trim().min(6).max(50),
});