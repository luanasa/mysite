
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

interface TranslatableTextProps {
  textKey: string;
  as?: React.ElementType;
  className?: string;
}

const TranslatableText: React.FC<TranslatableTextProps & React.HTMLAttributes<HTMLElement>> = ({
  textKey,
  as = 'span',
  className,
  ...props
}) => {
  const { translate } = useTranslation();
  const Component = as;

  return (
    <Component className={className} {...props}>
      {translate(textKey)}
    </Component>
  );
};

export default TranslatableText;
