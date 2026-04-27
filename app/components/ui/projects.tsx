export const projects = [
    {
      id: 0,
      title: "ReciMed — AI-Powered Medical Recipe Generator",
      tldr: "Upload a photo of your fridge, get safe recipes. ReciMed uses computer vision to identify ingredients and generates cooking options that check each one against drug-food interactions for your medications — backed by a RAG pipeline trained on 1,000+ cookbooks and 500+ healthcare papers.",
      description: "Most people don't think about how their medications interact with food. ReciMed does. You upload a photo of your ingredients, a computer vision model identifies them, and the system generates recipes while cross-referencing each ingredient against a RAG pipeline built on 1,000+ cookbooks and 500+ healthcare papers — checking drug-food interactions for 200+ medications in real time. Built on Palantir AIP, the system achieved 95%+ cuisine classification accuracy. The result is a tool that sits at a genuinely underserved intersection: personalized nutrition that is actually aware of your health context, not just your taste preferences.",
      image: "/ReciMed_SC.png", // Replace with /recimed.png once you have a screenshot
      link: "https://github.com/DaveSan2021/ReciMed-AI-Powered-Medical-Recipe-Generator",
    },
    {
      id: 1,
      title: "Eventure: AI Powered Social App",
      tldr: "Eventure is a platform that uses Gemini AI to generate and categorize city events based on your interests, then matches you with other people to do them with. 90 students, 80% activity match success — built in 36 hours.",
      description: "The problem: moving to a new city for an internship is isolating. The apps designed to help you meet people feel transactional. Eventure takes a different approach — instead of matching you with people directly, it matches you through shared experiences. Tell the app what you're into, and Gemini AI surfaces local activities and events tailored to your interests. When enough people queue up for the same activity, the app opens a group chat and sets them loose. We built Eventure in 36 hours at BitCamp 2024 using Next.js for the frontend, Prisma ORM for schema management, and Supabase with PostgreSQL as the backend. Within the first day of launch, 90 students were active on the platform with an 80% activity match success rate — which, for a hackathon project, felt like proof the underlying idea was right.",
      image: "/eventure.jpg",
      link: "https://github.com/bding08/Bitcamp-2024",
    },
    {
      id: 2,
      title: "Public Square: Dining Hall Recommendation App",
      tldr: "Public Square is a mobile app I developed to help University of Maryland students choose a diner based on daily ratings, allowing users to rate their experiences and make informed meal decisions.",
      description: "Public Square is an an app I developed to help UMD students decide which diner to go eat at on a certain day. I made this app because I realized that students don't always like to eat at the same place every day, and the diners are sometimes inconsistent in the quality of the food they serve. This app lets students rate their experience at the diner out of five stars. Other students will be able to view the ratings for the diners and make their meal plans for the day accordingly. For this project, I learned Swift, and I learned to use Apple's SwiftUI framework to develop a full stack mobile app in the Model View Controller design pattern.",
      image: "/publicsquare.png",
      link: "https://github.com/DaveSan2021/PublicSquare",
    },
    {
      id: 3,
      title: "Stockbyte: Social Media Stock Perception Tracker",
      tldr: "Stockbyte is a Hackathon project that won an award for best use of MongoDB at UMD’s 2023 BitCamp Hackathon, where we analyzed the correlation between social media users' opinions on stocks from the r/Investing subreddit and actual market performance, comparing user sentiment with real-world financial outcomes.",
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
