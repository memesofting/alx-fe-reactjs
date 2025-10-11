import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required('Username is required'),
  email: Yup.string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="bg-gray-500 flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
        <h2 className="font-extrabold text-lg mb-4 text-white">Register</h2>

        <div className="flex flex-col w-full mb-3">
          <label htmlFor="username" className="text-white">Username:</label>
          <Field
            name="username"
            type="text"
            className="bg-gray-300 p-2 rounded mt-1"
          />
          <ErrorMessage
            name="username"
            component="span"
            className="text-red-300 text-sm"
          />
        </div>

        <div className="flex flex-col w-full mb-3">
          <label htmlFor="email" className="text-white">Email:</label>
          <Field
            name="email"
            type="email"
            className="bg-gray-300 p-2 rounded mt-1"
          />
          <ErrorMessage
            name="email"
            component="span"
            className="text-red-300 text-sm"
          />
        </div>

        <div className="flex flex-col w-full mb-3">
          <label htmlFor="password" className="text-white">Password:</label>
          <Field
            name="password"
            type="password"
            className="bg-gray-300 p-2 rounded mt-1"
          />
          <ErrorMessage
            name="password"
            component="span"
            className="text-red-300 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-red-300 text-black font-bold py-2 px-4 rounded hover:bg-red-400 transition"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
