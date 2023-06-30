const Joi = require("joi");

const userSchema = Joi.object({
  firstname: Joi.string().max(50).required().messages({
    "any.required": "Firstname cannot be empty",
    "string.max": "Firstname should be less than 50 characters",
  }),
  lastname: Joi.string().max(50).required().messages({
    "any.required": "Lastname cannot be empty",
    "string.max": "Lastname should be less than 50 characters",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age cannot be empty",
  }),
  campus: Joi.string().max(255).required().messages({
    "any.required": "Campus cannot be empty",
    "string.max": "Campus should be less than 255 characters",
  }),
  profilePicture: Joi.string().max(150).messages({
    "string.max": "Profile picture should be less than 150 characters",
  }),
  email: Joi.string().email().max(255).required().messages({
    "any.required": "Email cannot be empty",
    "string.max": "Email should be less than 255 characters",
    "string.email": "Email should be a valid email format",
  }),
});

const projectSchema = Joi.object({
  name: Joi.string().max(150).required().messages({
    "any.required": "Name cannot be empty",
    "string.max": "Name should be less than 150 characters",
  }),
  description: Joi.string().max(65535),
  link: Joi.string().max(255).messages({
    "string.max": "Link should be less than 150 characters",
  }),
  user_id: Joi.number().required().messages({
    "any.required": "Number cannot be empty",
  }),
});

const validateUser = (req, res, next) => {
  const {
    firstname,
    lastname,
    age,
    campus,
    profile_picture: profilePicture,
    email,
  } = req.body;

  const { error } = userSchema.validate(
    { firstname, lastname, age, campus, profilePicture, email },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const validateProject = (req, res, next) => {
  const { name, description, link, user_id: userId } = req.body;

  const { error } = projectSchema.validate(
    { name, description, link, userId },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validateProject,
};
