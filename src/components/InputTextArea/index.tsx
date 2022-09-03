import React from 'react';
import { Input } from 'rsuite';

const TextAreaComponent = React.forwardRef<HTMLTextAreaElement>(
  (props, ref) => <Input {...props} as="textarea" ref={ref} />,
);
TextAreaComponent.displayName = 'TextAreaComponent';

export default TextAreaComponent;
