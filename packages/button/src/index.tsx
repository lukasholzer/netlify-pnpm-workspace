import type { ComponentProps, FC } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  color?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, color = 'inherit', ...rest } = props;

  return (
    <button style={{ border: '1px solid red', color }} {...rest}>
      {children}
    </button>
  );
};

export default Button;
