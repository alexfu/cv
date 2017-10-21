var moment = require("moment");

module.exports = {
  name: "Alex Fu",
  role: "Mobile Developer",
  contact: {
    email: "alex.fu914 [at] gmail.com"
  },
  sections: [
    {
      title: "About",
      template: "about",
      data: "I'm an experienced Android Developer looking for positions that allow me to build the best mobile experiences for users."
    },
    {
      title: "Employment",
      template: "employment",
      data: [
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
            "Built and maintained keycam.com",
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
            "Developed and maintained automated test scripts for multiple projects"
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
            "Worked with a small team to manage and administrate computers/accounts for the Manufacturing Engineering Laboratory Group"
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
          degree: "Bachelors in Computer Science"
        },
        {
          name: "Montgomery College",
          start_date: moment().month("August").year("2006"),
          end_date: moment().month("May").year("2008"),
        }
      ]
    },
    {
      title: "Skills",
      template: "skills",
      data: [
        {
          title: "Mobile",
          skills: ["Android", "iOS"]
        },
        {
          title: "Web",
          skills: ["Express", "koa", "Angular 1"]
        },
        {
          title: "DevOps",
          skills: ["Docker"]
        }
      ]
    },
    {
      title: "Talks",
      template: "talks",
      data: [
        {
          title: "Custom views and how to make them",
          link: "http://slides.com/alexfu/custom-views"
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
