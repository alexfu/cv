var moment = require("moment");

module.exports = {
  name: "Alex Fu",
  role: "Software Developer",
  contact: {
    email: "alex.fu914 [at] gmail.com"
  },
  employers: [
    {
      name: "Everseat",
      role: "Android/iOS Developer",
      start_date: moment().month("February").year("2015").format("MMM YYYY"),
      end_date: "Current",
      responsibilities: [
        "Rebuilt Android app with MVP architecture",
        "Maintain both iOS and Android apps"
      ]
    },
    {
      name: "Alexander & Tom",
      role: "Developer",
      start_date: moment().month("May").year("2013").format("MMM YYYY"),
      end_date: moment().month("January").year("2015").format("MMM YYYY"),
      responsibilities: [
        "Built and maintained various Android applications",
        "Built and maintained keycam.com",
        "Built an Android app that interfaces with the AR Drone API and FFMpeg for video processing",
        "Gained experience in various web technologies such as SCSS, Backbone, Marionette, and Meteor"
      ]
    },
    {
      name: "General Dynamics IT",
      role: "Quality Assurance",
      start_date: moment().month("July").year("2012").format("MMM YYYY"),
      end_date: moment().month("May").year("2013").format("MMM YYYY"),
      responsibilities: [
        "Developed and maintained automated test scripts for multiple projects"
      ]
    },
    {
      name: "Towson University",
      role: "Student Computing Services",
      start_date: moment().month("August").year("2011").format("MMM YYYY"),
      end_date: moment().month("June").year("2012").format("MMM YYYY"),
      responsibilities: [
        "Assisted students with administrative issues relating to their computers and accounts"
      ]
    },
    {
      name: "NIST",
      role: "Tech Intern",
      start_date: moment().month("June").year("2009").format("MMM YYYY"),
      end_date: moment().month("January").year("2011").format("MMM YYYY"),
      responsibilities: [
        "Worked with a small team to manage and administrate computers/accounts for the Manufacturing Engineering Laboratory Group"
      ]
    }
  ],
  universities: [
    {
      name: "Towson University",
      start_date: moment().month("August").year("2008").format("MMM YYYY"),
      end_date: moment().month("May").year("2012").format("MMM YYYY"),
      degree: "Bachelors in Computer Science"
    },
    {
      name: "Montgomery College",
      start_date: moment().month("August").year("2006").format("MMM YYYY"),
      end_date: moment().month("May").year("2008").format("MMM YYYY"),
    }
  ],
  languages: [
    "Java",
    "Javascript/Node",
    "Scala",
    "Ruby",
    "Objective C",
    "Swift",
    "Kotlin"
  ],
  skills: [
    "Photoshop"
  ],
  links: {
    github: "https://github.com/alexfu",
    googleplay: "https://play.google.com/store/apps/developer?id=Alex+Fu"
  }
};
