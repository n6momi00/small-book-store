import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toJS } from 'mobx';
import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Form, Alert } from 'react-bootstrap';
import { capitalizeFirstLetter, isNullOrEmpty } from '../utils/general';
import LoadingOverlay from './LoadingOverlay';

export default function BookForm({ book, onCreate, onUpdate, onDelete }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    formik.initialValues = getInitialValues();
  }, [book]);

  useEffect(() => {
    const elements = document.querySelectorAll("input, textarea");
    elements.forEach(el => {
      el.setAttribute('tabindex', isProcessing ? '-1' : '0');
    });
  }, [isProcessing]);

  const getInitialValues = () => {
    const data = toJS(book);
    return {
      title: data?.title || '',
      author: data?.author || '',
      description: data?.description || ''
    };
  };

  const validationSchema = Yup.object({
    title: Yup.string().max(100, 'Must be 100 characters or less').required(),
    author: Yup.string().max(100, 'Must be 100 characters or less').required(),
    description: Yup.string().max(1000, 'Must be 1000 characters or less').required()
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getInitialValues(),
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setError('');
        setIsProcessing(true);

        if (values.id) {
          delete values.id;
          await onUpdate(book, values);
        } else {
          await onCreate(values);
          resetForm();
        }

        setIsProcessing(false);
      } catch (error) {
        setIsProcessing(false);
        setError(error.message || error.response.data.error.message);
      }
    }
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className='book-form'>
      {isProcessing && <LoadingOverlay/> }

      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          isInvalid={formik.touched.title && formik.errors.title}
        />
        { formik.errors.title && (
          <Form.Control.Feedback type='invalid'>
            {capitalizeFirstLetter(formik.errors.title)}
          </Form.Control.Feedback>
        ) }
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          name='author'
          value={formik.values.author}
          onChange={formik.handleChange}
          isInvalid={formik.touched.author && formik.errors.author}
        />
        { formik.errors.author && (
          <Form.Control.Feedback type='invalid'>
            {capitalizeFirstLetter(formik.errors.author)}
          </Form.Control.Feedback>
        ) }
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows={5}
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          isInvalid={formik.touched.description && formik.errors.description}
        />
        { formik.errors.description && (
          <Form.Control.Feedback type='invalid'>
            {capitalizeFirstLetter(formik.errors.description)}
          </Form.Control.Feedback>
        ) }
      </Form.Group>

      <Row>
        <Col xs='auto'>
          <Button
            onClick={formik.handleSubmit}
            disabled={isProcessing}
          >
            Save New
          </Button>
        </Col>

        <Col xs='auto'>
          <Button
            onClick={(e) => {
              formik.setValues({ ...formik.values, id: book.id });
              formik.handleSubmit(e);
            }}
            disabled={!book?.id || isProcessing}
          >
            Save
          </Button>
        </Col>

        <Col xs='auto'>
          <Button
            onClick={() => onDelete(book)}
            disabled={!book?.id || isProcessing}
          >
            Delete
          </Button>
        </Col>
      </Row>

      {!isNullOrEmpty(error) && (
        <Alert className='mt-3' variant='danger'>
          {error}
        </Alert>
      )}
    </Form>
  );
}
