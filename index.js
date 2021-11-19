// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlgenerator = require('../My-Team/src/htmlgenerator');


const myteam = [];


// TODO: Create an array of questions for user input
const addteammanger = () => {
  return inquirer.prompt(
      [{

          type: "input",
          name: "name",
          message: "who is the  team manager’s name?",
        },
        {

          type: "input",
          name: "id",
          message: "What is the manager’s employee ID?",
        },
        {

          type: "input",
          name: "email",
          message: "What is the manager’s email address?",
        },
        {
          type: "input",
          name: "number",
          message: "what is manager’s office number ",
        }
      ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.number, answers.role);
      console.log(manager);
      myteam.push(manager);
      addteamemployee()

    })

}
const addteamemployee = () => {
  return inquirer.prompt({
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "No employee"]
    })
    .then((answers) => {

      if (answers.role == "Engineer") {
        console.log("yes Engineer");
        addteamEngineer()

      } else if (answers.role == "Intern") {
        console.log("yes intern");
        addteamIntern()
      } else {
        writeindex();
      }

    })
}
const addteamEngineer = () => {
  return inquirer.prompt(
      [{

          type: "input",
          name: "name",
          message: "What is the Engineer’s fullname?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Engineer’s employee ID?",
        },
        {

          type: "input",
          name: "email",
          message: "What is the Engineer’s email address?",
        },
        {
          type: "input",
          name: "github",
          message: "what is Engineer’s github username",
        }
      ])

    .then((answers) => {

      const engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
      console.log(engineer);
      myteam.push(engineer);
      addteamemployee();
    })
}

const addteamIntern = () => {
  return inquirer.prompt(
      [{

          type: "input",
          name: "name",
          message: "What is the Intern’s fullname?",
        },
        {

          type: "input",
          name: "id",
          message: "What is the Intern’s employee ID?",
        },
        {

          type: "input",
          name: "email",
          message: "What is the Intern’s email address?",
        },
        {
          type: "input",
          name: "school",
          message: "what is Intern’s school",
        }
      ])
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email,answers.school);
      console.log(intern);
      myteam.push(intern);
      addteamemployee();
    })
}




const writeindex = (answers) => {

  console.log(myteam)
  fs.writeFile('./dist/index.html', htmlgenerator(myteam), err => {

    // if there is an error 
    if (err) {
      console.log(err);
      return;
      // when the profile has been created 
    } else {

      console.log("Your team profile has been successfully created! Please check out the index.html")
    }
  })
};

addteammanger()







// .then(addteamemployee)

// .then(myteam => {
//   return htmlgenerator(myteam);
// })
// .then(pageHTML => {
//   return writeindex(pageHTML);
// });


