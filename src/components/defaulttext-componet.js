import { Text } from 'react-native';

const DefaultText = ({ children, className, ...rest }) => {
  const defaultStyles = 'font-raleway tracking-wide text-defaultColor';
  const mergedStyles = `${defaultStyles} ${className}`;

  return (
    <Text className={mergedStyles} {...rest}>
      {children}
    </Text>
  );
};

export default DefaultText;
