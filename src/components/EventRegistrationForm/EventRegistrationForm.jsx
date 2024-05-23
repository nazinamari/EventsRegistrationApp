import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './EventRegistrationForm.module.css';

const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    dob: Yup.date().required('Date of birth is required'),
    source: Yup.string().required('Please select an option'),
});

export default function EventRegistrationForm() {
    return (
        <div className={css.form__container}>
            <Formik
                initialValues={{ fullName: '', email: '', dob: '', source: '' }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="fullName">Full name</label>
                            <Field type="text" id="fullName" name="fullName" />
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div>
                            <label htmlFor="dob">Date of birth</label>
                            <Field type="date" id="dob" name="dob" />
                            <ErrorMessage
                                name="dob"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div className="radio-group">
                            <label>Where did you hear about this event?</label>
                            <div>
                                <label>
                                    <Field
                                        type="radio"
                                        name="source"
                                        value="Social media"
                                    />
                                    Social media
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="source"
                                        value="Friends"
                                    />
                                    Friends
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="source"
                                        value="Found myself"
                                    />
                                    Found myself
                                </label>
                                <ErrorMessage
                                    name="source"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
