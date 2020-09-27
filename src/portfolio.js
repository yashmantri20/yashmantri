
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Yash Mantri",
  title: "Hi all, I'm Yash",
  subTitle: emoji("Web Developer 👨‍💻 | Mobile App Developer 📱 | Content Writing ✍️"),
  resumeLink: "https://drive.google.com/file/d/1Bt6i4kqZ3xjNmY641eUcBDGxx53I6x0f/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/yashmantri20",
  github: "https://github.com/yashmantri20",
  twitter: "https://twitter.com/yashmantri20",
  gmail: "mantriyash2025@gmail.com",
  instagram: "https://www.instagram.com/yashmantri/",
};

// Your Skills Section

const skillsSection = {
  title: emoji("About Me 👦"),
  subTitle: "Hey, I'm currently pursuing B.Tech ( Computer Engineering ) . My curiosity levels are as fresh as when I was a child. I believe in eternal learning and deliberate effort as they are the only way to become the smartest in the room . I am a good timekeeper, always willing to learn new skills.",

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "logos:java",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "logos:react",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "Html5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "simple-icons:css3",
      style: {
        backgroundColor: "transparent",
        color: "skyblue"
      }
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa-database",
      style: {
        backgroundColor: "transparent",
      }
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "logos:firebase",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB"
      }
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fa-server",
      style: {
        backgroundColor: "transparent",
        color: "#34495E"
      }
    },
    {
      skillName: "VScode",
      fontAwesomeClassname: "fa-code",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "github",
      fontAwesomeClassname: "logos:github-icon",
      style: {
        backgroundColor: "transparent"
      }
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        backgroundColor: "transparent",
        color: "#339933",
      }
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web App Developement",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile App Development",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "yashmantri20", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),
  subtitle: "Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "NinjaThon 2020",
      subtitle: "Won NinjaThon 2020 organized by Coding Ninjas India.",
    },
    {
      title: "Certificate of Merit Award",
      subtitle: "Won Certificate of Merit Award in 1st semester of Computer Engineering.",
    }
  ]
};

// Blogs Section

const blogSection = {

  title: emoji("Blogs 📑"),
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@mantriyash2025/debouncing-and-throttling-in-javascript-4e43066bd3f6",
      title: "Debouncing and Throttling in JavaScript",
      description: "Are you interested to know how Debouncing and Throttling is implemented? If so, check out here !"
    },
    {
      url: "https://medium.com/@mantriyash2025/best-practices-on-linkedin-bf44c5b9587",
      title: "Best Practices on LinkedIn",
      description: "Do you want to optimize your LinkedIn Profile ? If so, check out here !"
    },
    {
      url: "https://medium.com/@mantriyash2025/interesting-facts-about-javascript-713a197bf5d2",
      title: "Interesting Facts about JavaScript ",
      description: "Do you want to know some cool things about Javascript ? If so, check out here !"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9601450402",
  email_address: "mantriyash2025@gmail.com"
};
  

export { 
  greeting, 
  socialMediaLinks, 
  skillsSection, 
  techStack, 
  openSource, 
  achievementSection, 
  blogSection, 
  contactInfo 
};
