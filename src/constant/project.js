//Ashish Neupane

//IMAGE
import dolphyReso from '../images/dolphy-resoo.png'
import driveTest from '../images/book-drivetest.png'
import vendingMachine from '../images//vending-machine.png'
import jobScan from '../images//jobScan.png'
import securefiletransfer from '../images//securefiletransfer.png'
import projectOne from '../images/ProjectSample1.png'
import projectTwo from '../images/ProjectSample2.png'
import projectThree from '../images/ProjectSample3.png'

export const projects = {
  ashish: [
    {
      name: 'Dolphy Resoo',
      imageUrl: dolphyReso,
      description:
        'This project displays listings of houses available for sale or rent in major cities of Ontario. Users can filter the listings based on prices. A cron job fetches the latest house list from the RETS connector every 15 minutes.',
      tags: ['NODEJS', 'SQLITE', 'NEXTJS', 'BOOTSTRAP', 'NEXT UI'],
      liveLink: '#',
    },
    {
      name: 'Book DriveTest',
      imageUrl: driveTest,
      description:
        'This project allows drivers to schedule appointments for their G2 or G tests. The admin is in charge of opening appointment slots for drivers to reserve, while the examiner determines whether a driver passes or fails their test.',
      tags: ['NODEJS', 'MONGODB', 'EXPRESSJS', 'BOOTSTRAP'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
    {
      name: 'Vending Machine',
      imageUrl: vendingMachine,
      description:
        'The Vending Machine Application simulates real-life vending machines. Customers can select a vending machine, choose products, and pay using credit cards, cash, or student cards.',
      tags: ['NODEJS', 'MONGODB'],
      liveLink: '#',
    },
  ],
  bipin: [
    {
      name: 'Data Visualizer',
      imageUrl: projectOne,
      description:
        'A web application that visualizes large datasets using interactive charts and graphs. Users can upload their datasets and generate visual representations with various filters and options.',
      tags: ['PYTHON', 'DJANGO', 'REACT', 'D3.JS'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
    {
      name: 'Machine Learning Platform',
      imageUrl: projectThree,
      description:
        'An end-to-end platform for building and deploying machine learning models. Users can create, train, and deploy models using a simple web interface, with support for popular ML libraries.',
      tags: ['NODEJS', 'PYTHON', 'TENSORFLOW', 'BOOTSTRAP'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
    {
      name: 'E-commerce Dashboard',
      imageUrl: projectTwo,
      description:
        'A dashboard for managing e-commerce operations, including order processing, inventory management, and sales analytics. Features real-time updates and detailed reporting.',
      tags: ['REACT', 'REDUX', 'NODEJS', 'EXPRESSJS', 'MONGODB'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
  ],
  sandeep: [
    {
      name: 'JobScan Application',
      imageUrl: jobScan,
      description:
        'Jobscan provides a match rate score that indicates how well your resume aligns with the job description. Review the keywords highlighted by Jobscan. These are the important terms and phrases from the job description that should be included in your resume.',
      tags: ['PYTHON', 'FLASK', 'REACT', 'D3.JS'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
    {
      name: 'Book DriveTest',
      imageUrl: driveTest,
      description:
        'This project allows drivers to schedule appointments for their G2 or G tests. The admin is in charge of opening appointment slots for drivers to reserve, while the examiner determines whether a driver passes or fails their test.',
      tags: ['NODEJS', 'MONGODB', 'EXPRESSJS', 'BOOTSTRAP'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
    {
      name: 'Secure File Transfer',
      imageUrl: securefiletransfer,
      description:
        'A secure file transfer application that ensures data is encrypted during transmission. It supports multiple encryption protocols and provides detailed logs of all transfers.',
      tags: ['JAVA', 'SPRING BOOT', 'MYSQL', 'ANGULAR'],
      liveLink: '#',
      repoLink: '#',
      demoLink: '#',
    },
  ],
}
