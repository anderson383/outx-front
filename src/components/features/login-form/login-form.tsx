import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import {
  campoRequerido, longitudMaxima, longitudMinima
} from '@/constants/errors';
import {
  useCallback, useState
} from 'react';
import {Formik} from 'formik';
import { LoginType } from '@/types/login/login-type';
import NextLink from 'next/link';
import { signIn } from 'next-auth/react';
import { TextField } from '@/components/ui/atoms/text-field/text-field';
import { useRouter } from 'next/router';

interface LoginFormProps {
  name: string
  id: string
  csrfToken: string;
}
const LoginForm:React.FC<LoginFormProps> = ({
  name, id, csrfToken
}) => {
  const loginValidationSchema = Yup.object().shape({
    password: Yup.string().min(5, longitudMinima).max(20, longitudMaxima).required(campoRequerido),
    username: Yup.string().required(campoRequerido)
  });

  const initialLoginValues:LoginType = {
    password: '',
    username: ''
  };

  const handleSubmitLogin = async (values: LoginType) => {
    console.log(values);
    try {
      signIn('credentials', values);
    } catch (err) {
      console.log(err);
    }
  };

  const router = useRouter();

  // const auth = useAuth();
  const [method, setMethod] = useState('email');

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  // const handleSkip = useCallback(
  //   () => {
  //     auth.skip();
  //     router.push('/');
  //   },
  //   [auth, router]
  // );

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                  Login Outx
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                  ¿No tienes una cuenta?
                  &nbsp;
                <Link

                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                    Registrate
                </Link>
              </Typography>
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
              />
              <Tab
                label="Phone Number"
                value="phoneNumber"
              />
            </Tabs>
            {method === 'email' && (

              <Formik
                initialValues={initialLoginValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleSubmitLogin}
              >
                {({handleSubmit}) => (
                  <form action="" className='' onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        label='Nombre de usuario'
                        name='username'
                      />
                      <TextField
                        label='Contraseña'
                        type='password'
                        name='password'
                      />
                    </Stack>
                    <FormHelperText sx={{ mt: 1 }}>
                      Optionally you can skip.
                    </FormHelperText>
                    {/* {formik.errors.submit && (
                      <Typography
                        color="error"
                        sx={{ mt: 3 }}
                        variant="body2"
                      >
                        {formik.errors.submit}
                      </Typography>
                    )} */}
                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}
                      type="submit"
                      variant="contained"
                    >
                      Continue
                    </Button>
                    <Button
                      fullWidth
                      size="large"
                      sx={{ mt: 3 }}

                    // onClick={handleSkip}
                    >
                      Registrarse
                    </Button>
                    {/* <Alert
                      color="primary"
                      severity="info"
                      sx={{ mt: 3 }}
                    >
                      <div>
                        You can use <b>demo@devias.io</b> and password <b>Password123!</b>
                      </div>
                    </Alert> */}
                  </form>
                )}
              </Formik>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  No disponible por el momento
                </Typography>
                <Typography color="text.secondary">
                    Esta caracteristica vendrá luego en proximos despliegues... :)
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;

