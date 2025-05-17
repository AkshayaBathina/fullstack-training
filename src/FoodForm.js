import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const FoodForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || { name: '', price: '', image: '' },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required('Food name is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
      image: Yup.string()
        .url('Enter a valid image URL')
        .nullable()
        .notRequired(),
    }),
    onSubmit: (values, { resetForm }) => {
      const foodData = {
        ...values,
        id: initialValues?.id || Date.now(),
      };
      onSubmit(foodData);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="Food Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name ? formik.errors.name : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Price (₹)"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price ? formik.errors.price : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image ? formik.errors.image : ''}
        margin="normal"
      />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        {initialValues ? 'Update' : 'Submit'}
      </Button>
    </form>
  );
};

export default FoodForm;