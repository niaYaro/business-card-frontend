import * as Yup from 'yup';

export const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s-]+$/, 'Name can only contain Latin letters, spaces, and dashes')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    message: Yup.string()
      .required('Required'),
  });