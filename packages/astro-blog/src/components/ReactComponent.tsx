import type { ComponentProps, FC } from 'react';
import Button from '@evilcorp/react-button';

type ReactComponentProps = ComponentProps<'div'> & {};

export const ReactComponent: FC<ReactComponentProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      <h2>This is a simple React component</h2>

      <Button color="red">😈 Button</Button>

      {children}
    </div>
  );
};

export default ReactComponent;
