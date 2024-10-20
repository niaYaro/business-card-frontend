import { Formik, Form, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import style from './ContactForm.module.scss';
import Heading from '../Heading/Heading';
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { validationSchema } from '../../utils/validationSchema';
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from '../../utils/EmailJSconfig';


const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"success" | "error" | "initial">("initial");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (values: Record<string, unknown>, { resetForm }: any) => {
    try {
      const response = await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, values, EMAIL_USER_ID);
      setFormStatus("success");
      console.log('SUCCESS!', response.status, response.text);
      resetForm();
      setSnackbarOpen(true);
    } catch (error) {
      setFormStatus("error");
      console.error('FAILED...', error);
      setSnackbarOpen(true);
    }
  };

  return (
    <section className={style.contactUsSection}>
      <Heading type='h2'>Зв'яжіться зі мною</Heading>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {formStatus === "success" ? (
          <Alert onClose={() => setSnackbarOpen(false)} severity="success">
            Form submitted successfully!
          </Alert>
        ) : (
          <Alert onClose={() => setSnackbarOpen(false)} severity="error">
            There was an error submitting the form!
          </Alert>
        )}
      </Snackbar>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleBlur, handleChange, values, errors, touched, isSubmitting }) => (
          <Form className={style.formWrapper}>
            <Field
              className={style.input}
              name="name"
              as={TextField}
              label="Name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              className={style.input}
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <Field
              className={style.input}
              name="message"
              as={TextField}
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            />

            <Button type="submit" variant="contained" color="primary" className={style.formButton}>
              {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Надіслати'}
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
