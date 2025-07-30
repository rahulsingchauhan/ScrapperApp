import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters')
    .max(50, 'Full name must be less than 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email or mobile is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default SignUpSchema;