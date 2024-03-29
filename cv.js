var moment = require("moment");

module.exports = {
  name: "Alex Fu",
  role: "Mobile Developer",
  contact: {
    phone: "301-385-4815",
    email: "alex.fu914@gmail.com"
  },
  sections: [
    {
      title: "Experience",
      template: "employment",
      data: [
        {
          name: "Leafly",
          role: "Engineering Manager",
          start_date: moment().month("April").year("2023"),
          end_date: null,
          responsibilities: []
        },
        {
          name: "Leafly",
          role: "Senior Software Engineer",
          start_date: moment().month("October").year("2021"),
          end_date: moment().month("April").year("2023"),
          responsibilities: []
        },
        {
          name: "Leafly",
          role: "Software Engineer",
          start_date: moment().month("February").year("2018"),
          end_date: moment().month("October").year("2021"),
          responsibilities: [
            "Developed new e-commerce features into existing app",
            "Maintain existing app by fixing critical bugs"
          ]
        },
        {
          name: "Omnitracs",
          role: "Android Engineer",
          start_date: moment().month("December").year("2017"),
          end_date: moment().month("January").year("2018"),
          responsibilities: [
            "Work with existing team to implement bug fixes",
            "Automate server environment using Vagrant"
          ]
        },
        {
          name: "Everseat",
          role: "Android/iOS Developer",
          start_date: moment().month("February").year("2015"),
          end_date: moment().month("October").year("2017"),
          responsibilities: [
            "Rebuilt Android app with MVP architecture",
            "Maintain both iOS and Android apps",
            "Migrated iOS code base from Objective-C to Swift",
            "Develop and maintain internal analytics dashboard using web technologies"
          ]
        },
        {
          name: "Alexander & Tom",
          role: "Developer",
          start_date: moment().month("May").year("2013"),
          end_date: moment().month("January").year("2015"),
          responsibilities: [
            "Built and maintained various Android applications",
            "Built and maintained web apps",
            "Built an Android app that interfaces with the AR Drone API and FFMpeg for video processing",
            "Gained experience in various web technologies such as SCSS, Backbone, Marionette, and Meteor"
          ]
        },
        {
          name: "General Dynamics IT",
          role: "Quality Assurance",
          start_date: moment().month("July").year("2012"),
          end_date: moment().month("May").year("2013"),
          responsibilities: [
            "Developed and maintained automated test scripts for multiple projects",
            "Developed testing reports for stakeholders"
          ]
        },
        {
          name: "Towson University",
          role: "Student Computing Services",
          start_date: moment().month("August").year("2011"),
          end_date: moment().month("June").year("2012"),
          responsibilities: [
            "Assisted students with administrative issues relating to their computers and accounts"
          ]
        },
        {
          name: "NIST",
          role: "Tech Intern",
          start_date: moment().month("June").year("2009"),
          end_date: moment().month("January").year("2011"),
          responsibilities: [
            "Worked with a small team to manage and administrate computers/accounts for the Manufacturing Engineering Laboratory Group",
            "Prepare laptops and desktops that adhere to specific security standards"
          ]
        }
      ]
    },
    {
      title: "Education",
      template: "education",
      data: [
        {
          name: "Towson University",
          start_date: moment().month("August").year("2008"),
          end_date: moment().month("May").year("2012"),
          degree: "B.S. Computer Science"
        },
        {
          name: "Montgomery College",
          start_date: moment().month("August").year("2006"),
          end_date: moment().month("May").year("2008"),
        }
      ]
    },
    {
      title: "Projects",
      template: "projects",
      data: [
        {
          name: "Humemo",
          summary: [
            "Android app for setting reminders for yourself and friends",
            "Full stack project with Rails backend",
            "100% Kotlin"
          ]
        },
        {
          name: "AndroidAutoVersion",
          summary: [
            "Gradle plugin for automatic app versioning",
            "Based on semantic versioning"
          ]
        },
        {
          name: "Buglife",
          summary: [
            "Open source Android SDK for bug reporting"
          ]
        }
      ]
    },
    {
      title: "Talks/Presentations",
      template: "talks",
      data: [
        {
          title: "Gave talk on custom views in Android @ Google Developer Group meetup",
          link: "http://slides.com/alexfu/custom-views"
        },
        {
          title: "Ran a workshop/codelab session @ DevFestMD on Kotlin"
        }
      ]
    },
    {
      title: "Other",
      template: "other",
      data: {
        github: "https://github.com/alexfu"
      }
    }
  ]
};
