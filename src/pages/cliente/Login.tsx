import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';

export const Login = () => {
    return (
    <div className="login-page">
        <div className="login">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    username: Yup.string()
                                  .required('Requerido'),
                    password: Yup.string()
                                 .min(6, 'Debe tener 6 caracteres al menos.')
                                 .required('Requerido')
                })}>
                {() => (
                        <Form className="login-form">
                            <div className="form-field-container">
                                <label htmlFor="username" className="form-label">Usuario</label>
                                <Field type="text" name="username" className="form-field" />
                                <ErrorMessage name="username" component="span" />
                            </div>
                            <div className="form-field-container">
                                <label htmlFor="lastName" className="form-label">Password</label>
                                <Field type="password" name="password" className="form-field" />
                                <ErrorMessage name="password" component="span" />
                            </div>
                            <button type="submit" className="form-submit">Iniciar sesión</button>
                        </Form>
                    )}
            </Formik>
        </div>
    </div>
    )
};