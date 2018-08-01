import {
  wm,
  fullstack,
  stAndrews,
  pwc,
  grantThornton,
  irishFlag,
  northeast,
  monastery,
  natlParkService
} from './images';

const data = [
  {
    id: 10,
    category: 'Work Experience',
    place: 'Fullstack Academy',
    title: 'Teaching Fellow',
    dates: 'June 2018 - Aug 2018',
    description: [
      'Serve as mentor and project manager for over 50 Fullstack Academy students',
      'Help teach software engineering concepts, algorithms, debugging strategies, and code hygiene',
      `Contribute production code to Fullstack's dedicated teaching platform, performing Angular-to-React conversions for front-end modules`,
      `Administer technical interviews for prospective students in JavaScript and Python`
    ],
    image: fullstack
  },
  {
    id: 9,
    category: 'Education',
    place: 'Fullstack Academy',
    dates: 'May 2018',
    description: [
      'Immersive software engineering program, focused on fullstack JavaScript development'
    ],
    image: fullstack
  },
  {
    id: 8,
    category: 'Work Experience',
    place: 'PwC LLP',
    title: 'Experienced Advisory Associate',
    dates: 'Nov 2016 - Feb 2018',
    description: [
      'Tested the effectiveness of internal controls, summarized control deficiencies, and recommended improvements',
      'Mapped client processes across multiple operational areas',
      'Managed the planning and execution of control test phases'
    ],
    image: pwc
  },
  {
    id: 7,
    category: 'Cool Stuff',
    place: 'Pilgrimage to the Land of My Ancestors (Ireland)',
    dates: 'Sept 2017',
    description: [
      'Hiked from Doolin up the Cliffs of Moher',
      'Danced with the locals',
      `Played Ed Sheeran on repeat while driving through the country`
    ],
    image: irishFlag
  },
  {
    id: 6,
    category: 'Work Experience',
    place: 'Grant Thornton',
    title: 'Advisory Associate',
    dates: 'Aug 2015 - Oct 2016',
    description: [
      'Conducted SOX-404 compliance assessments for telecomm, pharmaceutical, and hospitality clients',
      'Managed a team of international support staff based in India'
    ],
    image: grantThornton
  },
  {
    id: 5,
    category: 'Education',
    place: 'The College of William and Mary',
    dates: 'May 2015',
    description: ['Bachelor of Business Administration, Accounting'],
    image: wm
  },
  {
    id: 4,
    category: 'Cool Stuff',
    place: 'Great Northeast Roadtrip',
    dates: 'March 2015',
    description: [
      `7 days, 12 states`,
      `Snowmobiled through Acadia National Park`,
      `Finished a Vermonster at the Ben and Jerry's Factory`,
      `Visited the site of the Miracle on Ice`
    ],
    image: northeast
  },
  {
    id: 3,
    category: 'Education',
    place: 'The University of St. Andrews',
    dates: 'Jan 2013 - May 2013',
    description: [
      'Semester Study Abroad',
      'Major: golf, tea, and cliff hiking',
      `Blog: https://dmzobel.wordpress.com/`
    ],
    image: stAndrews
  },
  {
    id: 2,
    category: 'Cool Stuff',
    place: 'Spent 5 days in a deserted Italian monastery',
    dates: 'March 2013',
    description: ['I thought there would be more people. There were not.'],
    image: monastery
  },
  {
    id: 1,
    category: 'Cool Stuff',
    place: 'Backpacked the Grand Canyon',
    dates: 'June 2012',
    description: [
      `Descended from the North Rim's North Kaibab trail`,
      'Camped at Phantom Ranch on Bright Angel Creek',
      'Ascended the South Rim via South Kaibab trail'
    ],
    image: natlParkService
  }
];

export default data;
