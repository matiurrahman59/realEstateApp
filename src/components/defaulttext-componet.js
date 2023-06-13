import { Text } from 'react-native';

const DefaultText = ({ children, className, ...rest }) => {
  const defaultStyles =
    'font-raleway tracking-wide text-defaultColor text-xs leading-[14px]';
  const mergedStyles = `${defaultStyles} ${className}`;

  return (
    <Text className={mergedStyles} {...rest} numberOfLines={1}>
      {children}
    </Text>
  );
};

export default DefaultText;
