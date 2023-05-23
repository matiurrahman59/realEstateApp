import { Dimensions, StatusBar } from 'react-native';
const { width, height } = Dimensions.get('window');

export const statusBar = StatusBar.currentHeight || 0;

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

export const categoryList = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'House',
  },
  {
    id: 3,
    title: 'Apartment',
  },
  {
    id: 4,
    title: 'House',
  },
  {
    id: 5,
    title: 'Apartment',
  },
  {
    id: 6,
    title: 'House',
  },
];

export const topLocations = [
  {
    id: 1,
    name: 'New York City',
    description: 'The city that never sleeps',
    imageUrl: [
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    estates: [
      {
        name: 'Luxury Apartment',
        address: '123 Main Street',
        price: 2000000,
        rating: 4.8,
      },
      {
        name: 'Spacious Condo',
        address: '456 Park Avenue',
        price: 1500000,
        rating: 4.5,
      },
    ],
  },
  {
    id: 2,
    name: 'Los Angeles',
    description: 'The entertainment capital of the world',
    imageUrl: [
      'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    estates: [
      {
        name: 'Modern Villa',
        address: '789 Ocean Drive',
        price: 3000000,
        rating: 4.9,
      },
      {
        name: 'Charming Bungalow',
        address: '234 Sunset Boulevard',
        price: 1200000,
        rating: 4.2,
      },
    ],
  },
  {
    id: 3,
    name: 'London',
    description: 'The historic city with a modern twist',
    imageUrl: [
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ],
    estates: [
      {
        name: 'Townhouse Residence',
        address: '10 Downing Street',
        price: 5000000,
        rating: 4.7,
      },
      {
        name: 'Penthouse Suite',
        address: '1 London Bridge',
        price: 4000000,
        rating: 4.6,
      },
    ],
  },
  {
    id: 4,
    name: 'New York City',
    description: 'The city that never sleeps',
    imageUrl: [
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    estates: [
      {
        name: 'Luxury Apartment',
        address: '123 Main Street',
        price: 2000000,
        rating: 4.8,
      },
      {
        name: 'Spacious Condo',
        address: '456 Park Avenue',
        price: 1500000,
        rating: 4.5,
      },
    ],
  },
  {
    id: 5,
    name: 'Los Angeles',
    description: 'The entertainment capital of the world',
    imageUrl: [
      'https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ],
    estates: [
      {
        name: 'Modern Villa',
        address: '789 Ocean Drive',
        price: 3000000,
        rating: 4.9,
      },
      {
        name: 'Charming Bungalow',
        address: '234 Sunset Boulevard',
        price: 1200000,
        rating: 4.2,
      },
    ],
  },
];

export const topAgents = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.8,
    review: 150,
    sold: 82,
    rank: 1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.6,
    review: 120,
    sold: 65,
    rank: 2,
  },
  {
    id: 3,
    name: 'David Johnson',
    email: 'david.johnson@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.7,
    review: 110,
    sold: 75,
    rank: 3,
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    review: 108,
    sold: 82,
    rank: 1,
  },
  {
    id: 5,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    review: 80,
    sold: 65,
    rank: 2,
  },
];

export default {
  welcomeImage,
  onBoarding,
  logIn,
  socialIcons,
  BrandLogo,
  DEVICE,
  categoryList,
  topLocations,
  topAgents,
};
