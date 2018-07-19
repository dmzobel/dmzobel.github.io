import { wm, fullstack, stAndrews, pwc, grantThornton } from './images';

const data = [
  // TODO: images for all of these
  {
    id: 1,
    category: 'Work Experience',
    place: 'Fullstack Academy',
    title: 'Teaching Fellow',
    dates: 'June 2018 - Aug 2018',
    description: [
      'Mentor for over 50 Fullstack Academy students',
      'Help teach software engineering concepts, algorithms, debugging strategies, and code hygiene'
    ],
    image: fullstack
  },
  {
    id: 2,
    category: 'Education',
    place: 'Fullstack Academy',
    title: '',
    dates: 'May 2018',
    description: [
      'Immersive software engineering program, focused on fullstack JavaScript development'
    ],
    image: fullstack
  },
  {
    id: 3,
    category: 'Work Experience',
    place: 'PwC LLP',
    title: 'Experienced Advisory Associate',
    dates: 'Nov 2016 - Feb 2018',
    description: [
      'Mapped client processes across multiple operational areas and tested the effectiveness of internal controls',
      'Summarized control deficiencies and recommended improvements',
      'Managed the planning and execution of control testing stages'
    ],
    image: pwc
  },
  {
    id: 4,
    category: 'Work Experience',
    place: 'Grant Thornton',
    title: 'Advisory Associate',
    dates: 'Aug 2015 - Oct 2016',
    description: [
      'Conducted SOX-404 compliance assessments for telecommunications, pharmaceutical, and hospitality clients',
      'Managed a team of international support staff based in India'
    ],
    image: grantThornton
  },
  {
    id: 5,
    category: 'Education',
    place: 'The College of William and Mary',
    title: '',
    dates: 'May 2015',
    description: ['Bachelor of Business Administration, Accounting'],
    image: wm
  },
  {
    id: 6,
    category: 'Cool Stuff',
    place: 'Great Northeast Roadtrip',
    dates: 'March 2015',
    description: [
      `7 days, 12 states`,
      `Snowmobiled through Acadia National Park`,
      `Finished a Vermonster at the Ben and Jerry's Factory`,
      `Visited the site of the Miracle on Ice`
    ]
  },
  {
    id: 7,
    category: 'Education',
    place: 'The University of St. Andrews',
    title: '',
    dates: 'Jan 2013 - May 2013',
    description: ['Semester Study Abroad'],
    image: stAndrews
  },
  {
    id: 8,
    category: 'Cool Stuff',
    place: 'Spent 5 days in a deserted Italian monastery',
    dates: 'March 2013',
    description: ['I thought there would be more people. There were not.']
  },
  {
    id: 9,
    category: 'Cool Stuff',
    place: 'Backpacked the Grand Canyon',
    dates: 'June 2012',
    description: [
      `Descended from the North Rim's North Kaibab trail`,
      'Camped at Phantom Ranch on Bright Angel Creek',
      'Ascended the South Rim via South Kaibab trail'
    ]
  }
];

export default data;
