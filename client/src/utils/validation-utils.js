import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  gender: yup.string().required(),
  company: yup.string().required(),
  password: yup.string().required(),
});

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const checkRegistration = ({ fields }) => registrationSchema.validate(fields, { abortEarly: false });
export const checkLogin = ({ username, password }) => loginSchema.validate({ username, password }, { abortEarly: false });
