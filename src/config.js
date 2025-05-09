module.exports = {
  email: 'sophiashanthan@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/SophShan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sophiashantharupan/',
    },
    {
      name: 'Gmail',
      url: 'mailto:sophiashanthan@gmail.com',
    },
    // {
    //   name: 'Instagram',
    //   url: 'INSTA_URL',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'TWITTER_URL',
    // },
    // {
    //  name: 'Medium',
    //  url: 'https://medium.com/@benkostiuk',
    // },
    // {
    //  name: 'Devpost',
    //  url: 'https://devpost.com/benjaminkostiuk',
    //},
    // {
    //   name: 'Codepen',
    //   url: 'CODEPEN_URL',
    // },
    // {
    //  name: 'Itch.io',
    //  url: 'https://benkostiuk.itch.io',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    // {
    //  name: 'Resources',
    //  url: '/resources',
    // },
  ],

  colors: {
    primary: '#3b83f6',
    bg: '#ffffff',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
