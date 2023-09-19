import styles from './text-field.module.scss';
import { useField } from 'formik';

interface TextFieldProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;
  disableError?: boolean;
  props?: Record<string, any>;
}

export const TextField:React.FC<TextFieldProps> = ({
  name,
  placeholder,
  type = 'text',
  className,
  label,
  disableError = false,
  props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={styles.text_field}>
      <input
        name={name}
        className={`${ className }`}
        type={type}
        value={field.value}
        onChange={value => helpers.setValue(value.target.value)}
        placeholder={placeholder}
        {...props}
      />
      {!disableError && meta.error && <span>{meta.error}</span>}
    </div>
  );
};
