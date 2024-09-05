export const projects = [
    {
      id: 1,
      title: "AI Powered Social App",
      description: "Eventure is part of a Hackathon project group was inspired by the challenges we faced in making new friends when moving to new cities for summer internships. Many young adults, especially post-COVID, have struggled to form meaningful connections despite technological advances. Eventure aims to bridge this gap by creating a platform where people can meet and form friendships through shared interests and activities, turning the process of finding friends in unfamiliar places into an exciting adventure. The platform gathers information about users' hobbies and interests, then uses Gemini AI to recommend local activities and events. Users can choose activities and be added to queues where, once full, they can chat and meet in person. Eventure fosters long-term friendships through shared experiences. We built Eventure using NextJS for the front-end, Prisma ORM for the database schema, and integrated it with Supabase and PostgreSQL. We sourced event data from platforms like Eventbrite and used AI to recommend events tailored to users' preferences. Despite challenges in data gathering, testing AI algorithms, and integrating APIs, we successfully created a full-stack application with a clean and professional UI within 36 hours.",
      image: "/eventure.jpg",
      link: "https://github.com/bding08/Bitcamp-2024",
    },
    {
      id: 2,
      title: "Public Square: Dining Hall Recommendation App",
      description: "This is Public Square, an app I developed to help UMD students decide which diner to go eat at on a certain day. I made this app because I realized that students don't always like to eat at the same place every day, and the diners are sometimes inconsistent in the quality of the food they serve. This app lets students rate their experience at the diner out of five stars. Other students will be able to view the ratings for the diners and make their meal plans for the day accordingly. For this project, I learned Swift, and I learned to use Apple's SwiftUI framework to develop a full stack mobile app in the Model View Controller design pattern.",
      image: "/publicsquare.png",
      link: "https://github.com/DaveSan2021/PublicSquare",
    },
    {
      id: 3,
      title: "Stockbyte: Social Media Stock Perception Tracker",
      description: "Stockbyte is another Hackathon group project that won an award for best use of MongoDB in UMD’s 2023 BitCamp Hackathon. The goal of this project was to analyze how well opinions of social media users on a specific stock faired against actual market performance. Specifically for this project, we decided to compare real world financial outcomes with the predictions of people on a subreddit called r/Investing, where users seemed to have serious discourse about the stock market. To accomplish this task, Reddit's API was used to read through one month of posts and saved the data in MongoDB. An NLP library in Pandas was used clean the data and to produce a score for how positive or negative users felt about a particular stock. The results were visualized on a Flask website that compared the real stock performance with the score of the users.",
      image: "/stockbyte.png", // Ensure these images are in the public/images directory
      link: "https://github.com/bding08/Bitcamp-2023.git",
    },
    
    // {
    //   id: 4,
    //   title: "Project Four",
    //   description: "This is a brief description of Project Four. It leverages cutting-edge technology for optimal results.",
    //   image: "/images/project4.png",
    //   link: "/projects/4",
    // },
];
