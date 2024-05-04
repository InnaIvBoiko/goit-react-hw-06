import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This field is required!'),
    number: Yup.string()
        .matches(phoneRegExp, 'Phone number should be "xxx-xx-xx"')
        .required('This field is required!'),
});

export default function ContactForm({ onAdd }) {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, actions) => { 
        onAdd(values);
        actions.resetForm();
    };
    
    return (
        <Formik initialValues={{
            name: '',
            number: '',
        }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit} >
            <Form className={css.form} >
                <div className={css.group} >
                    <label htmlFor={nameId}>
                        Name
                    </label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage className={css.error} name="name" component="span" />
                    
                </div>
                <div className={css.group} >
                    <label htmlFor={numberId}>
                        Number
                    </label>
                    <Field type="text" name="number" id={numberId} />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>

                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}