// defining an array to hold banner image information
export const bannerImages = [
  {
    id: 1,
    // setting the path for the first banner image using PUBLIC_URL for correct base path
    url: process.env.PUBLIC_URL + '/images/banner1.jpg',
    // adding a description for the first banner image
    description: 'The Steak you cannot say no to ...',
  },
  {
    id: 2,
    // setting the path for the second banner image
    url: process.env.PUBLIC_URL + '/images/banner2.jpg',
    // adding a description for the second banner image
    description: 'Some yum stuff you do not want to pass ...',
  },
  {
    id: 3,
    // setting the path for the third banner image
    url: process.env.PUBLIC_URL + '/images/banner3.jpg',
    // adding a description for the third banner image
    description: 'We also have kitchen in the barn ...',
  },
  {
    id: 4,
    // setting the path for the fourth banner image
    url: process.env.PUBLIC_URL + '/images/banner4.jpg',
    // adding a description for the fourth banner image
    description: 'Ooo the fresh bread ...',
  },
  // additional images can be added following the same pattern
];
