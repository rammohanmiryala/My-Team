const generateManager = function (Manager) {
    return `
    <div class="container">
            <div class="row mainouter">
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${Manager.name}</p>
                                <p class="subtitle">Manager</p>
                                <li class="list-group-item section1">ID : ${Manager.id}</li>
                                <li class="list-group-item section2">Emai : ${Manager.email}</li>
                                <li class="list-group-item section3"> Office Numbee : ${Manager.number}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const generateengineer = function (engineer) {
    return `
    <div class="container">
            <div class="row mainouter">
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${engineer.name}</p>
                                <p class="subtitle">Engineer</p>
                                <li class="list-group-item section1">ID : ${engineer.id}</li>
                                <li class="list-group-item section2">>Emai : ${engineer.email}</li>
                                <li class="list-group-item section3">Gitub : ${engineer.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const generateintern = function (Intern) {
    return `
    <div class="container">
            <div class="row mainouter">
                <div class="col-md-3 outer">
                    <div class="row">
                        <div class="card maincard">
                            <ul class="list-group list-group-flush cardbox">
                                <p class="header">${Intern.name}</p>
                                <p class="subtitle">Intern</p>
                                <li class="list-group-item section1">ID : ${Intern.id}</li>
                                <li class="list-group-item section2">Emai : ${Intern.email}</li>
                                <li class="list-group-item section3">School : ${Intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

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
        ${employeeCards}
        </main>
    `;
}

htmlgenerator = (myteam) => {
    teampageArray = [];

    for (let i = 0; i < myteam.length; i++) {
        console.log(myteam[i])
        console.log(myteam[i])

        const employee = myteam[i];
        const role = employee.getRole();
        
        if (role == "Manager") {
            console.log("i am manager");
            const mangerCard = generateManager();
            pageArray.push(mangerCard);

        }
        if (role == "Engineer") {
            console.log("i am engineer");

            const engineerCard = generateengineer();
            pageArray.push(engineerCard);

        }
        if (role == "Intern") {
            console.log("i am Intern");

            const internCard = generateintern();
            pageArray.push(internCard);

        }

    }


    const employeeCards = teampageArray.join('')
    const generateTeam = generatepage(employeeCards);
    return generateTeam;

}

module.exports = htmlgenerator;