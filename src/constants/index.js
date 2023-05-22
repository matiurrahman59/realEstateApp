import { Dimensions, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

export const statusBar = StatusBar.currentHeight || 0;
console.log('---', statusBar);

export const DEVICE = {
  width,
  height,
  statusBar,
};

export const BrandLogo = require('../assets/images/logo.png');
export const welcomeImage = require('../assets/images/Onboarding/welcome-image.png');

const onBoardingImages = {
  image1: require('../assets/images/Onboarding/image-1.png'),
  image2: require('../assets/images/Onboarding/image-2.png'),
  image3: require('../assets/images/Onboarding/image-3.png'),
};

const logInImages = {
  image1: require('../assets/images/Login/image-1.png'),
  image2: require('../assets/images/Login/image-2.png'),
  image3: require('../assets/images/Login/image-3.png'),
  image4: require('../assets/images/Login/image-4.png'),
};

const socialIcons = {
  fb: require('../assets/images/Login/Facebook.png'),
  google: require('../assets/images/Login/Google.png'),
};

const onBoarding = [
  {
    id: 0,
    title: 'Find best place to stay in $good price$',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    image: onBoardingImages.image1,
  },
  {
    id: 1,
    title: 'Fast sell your property in just $one click$',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    image: onBoardingImages.image2,
  },
  {
    id: 2,
    title: 'Find $perfect choice$ for your future house ',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
    image: onBoardingImages.image3,
  },
];

const logIn = [
  {
    id: 0,
    url: logInImages.image1,
  },
  {
    id: 1,
    url: logInImages.image2,
  },
  {
    id: 2,
    url: logInImages.image3,
  },
];

export default {
  welcomeImage,
  onBoarding,
  logIn,
  socialIcons,
  BrandLogo,
  DEVICE,
};
