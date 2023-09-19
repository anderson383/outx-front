import * as yup from 'yup';
import {
  campoRequerido, longitudMaxima, longitudMinima
} from '@/constants/errors';
import { Formik } from 'formik';
import { LoginType } from '@/types/login/login-type';
import { signIn } from 'next-auth/react';
import styles from './login-form.module.scss';
import { TextField } from '../../ui/atoms/text-field/text-field';

interface LoginFormProps {
  name: string
  id: string
  csrfToken: string;
}
const LoginForm:React.FC<LoginFormProps> = ({
  name, id, csrfToken
}) => {
  // .matches(regexValidPassword, 'Contraseña invalida'),
  const loginValidationSchema = yup.object().shape({
    password: yup.string().min(5, longitudMinima).max(20, longitudMaxima).required(campoRequerido),
    username: yup.string().required(campoRequerido)
  });

  const initialLoginValues:LoginType = {
    password: '0lelplR',
    username: 'kminchelle'
  };

  const handleSubmitLogin = async (values: LoginType) => {
    try {
      signIn('credentials', values);
    } catch (err) {

    }
  };

  return (
    <div className={styles.login_form} key={id}>
      <h2>Login Deily</h2>

      <div>
        <Formik
          initialValues={initialLoginValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmitLogin}
        >
          {({handleSubmit}) => (
            <form action="" className='' onSubmit={handleSubmit}>
              <TextField
                name='username'
              />
              <TextField
                type='password'
                name='password'
              />
              <button type='submit'>Submit</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;

