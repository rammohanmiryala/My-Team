
//  funtion to create Manager div
const generateManager = function (manager) {
    return `
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${manager.name}</p>
                                <p class="subtitle">Manager</p>
                                <li class="list-group-item section1">ID : ${manager.id}</li>
                                <li class="list-group-item section2">Email :<a href = "mailto:${manager.email}">${manager.email}</a></li>
                                <li class="list-group-item section3"> Office Number : ${manager.number}</li>
                            </ul>
                        </div>
                    </div>
                </div>     
    `;
}

//  funtion to create intern div
const generateintern = function (Intern) {
    return `
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${Intern.name}</p>
                                <p class="subtitle">Intern
                                </p>
                                <li class="list-group-item section1">ID : ${Intern.id}</li>
                                <li class="list-group-item section2">Email :<a href = "mailto:${Intern.email}">${Intern.email}</a></li>
                                <li class="list-group-item section3">School : ${Intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>     
    `;
}
//  funtion to create engineer div
const generateengineer = function (engineer) {
    return `
    
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${engineer.name}</p>
                                <p class="subtitle">Engineer</p>
                                <li class="list-group-item section1">ID : ${engineer.id}</li>
                                <li class="list-group-item section2">Email : ${engineer.email}</li>
                                <li class="list-group-item section3">Github : <a href = "https://github.com/${engineer.github}">${engineer.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        
    `;
}

//  funtion to create htmlpage
const generatepage = function (employeeCards) {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style .css">
        </link>
        <title>Myteam</title>
    </head>

    <body>
    
        <nav class="navbar navbar-expand-sm|md|lg|-xl">
            <div class="container">
                <a class="navbar-brand Myteam" href="#">MyTeam</a>
            </div>
        </nav>
        <main>
        <div class="container">
            <div class="row mainouter">
           
            ${employeeCards} 
            </div>
        </div>  
        </main>
    `;
}
// funtion to genrate the page with user selection  base don role 
htmlgenerator = (myteam) => {
    teampageArray = [];

    for (let i = 0; i < myteam.length; i++) {
        console.log(myteam[i])

        const employee = myteam[i];
        const role = employee.getRole();
        console.log(role)


        if (role == "Manager") {
            console.log("i am manager");
            const mangerCard = generateManager(employee);
            teampageArray.push(mangerCard);

        }
        if (role == "Engineer") {
            console.log("i am engineer");

            const engineerCard = generateengineer(employee);
            teampageArray.push(engineerCard);

        }
        if (role == "Intern") {
            console.log("i am Intern");

            const internCard = generateintern(employee);
            teampageArray.push(internCard);

        }

    }


    const employeeCards = teampageArray.join('')
    const generateTeam = generatepage(employeeCards);
    return generateTeam;

}

module.exports = htmlgenerator;