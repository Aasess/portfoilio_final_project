//Ashish Neupane

//IMAGE
import ashishProfile from '../images/ashish-profile.jpg'
import SandeepPic from '../images/SandeepPic.jpg'
import bipinProfile from '../images/ProfileBipin.jpg'

//dynmaically generating profile home page content for each user
export const profiles = {
  ashish: {
    name: 'Ashish Neupane',
    title: 'Software Engineer',
    imageUrl: ashishProfile,
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/ashishneupane1997',
      },
      { platform: 'github', url: 'https://github.com/aasess' },
    ],
  },
  bipin: {
    name: 'Bipin Gurung',
    title: 'Full Stack Developer',
    imageUrl: bipinProfile,
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/bipin-gurung-62a424275/',
      },
      { platform: 'github', url: 'https://github.com/Bipin221gurung' },
    ],
  },
  sandeep: {
    name: 'Sandeep Kaur',
    title: 'Software Engineer',
    imageUrl: SandeepPic ,
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/sandeep-kaur-2b6414276',
      },
      { platform: 'github', url: 'https://github.com/sandeep521995' },
    ],
  },
}
