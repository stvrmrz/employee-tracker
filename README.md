<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#link-to-demo">Link to Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Employee Tracker Demo

![Project Employee Tracker Demo](employee-tracker.gif)

This project was about creating a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL. 


<!-- GETTING STARTED -->
## Getting Started

Please follow these steps if you'd like to clone the repo so you can can see the files yourself

### Prerequisites

Please have a GitHub account and set up your SSH key so you may git pull the latest changes to the repository. It's
reccomended to install Visual Studio code as well.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:stvrmrz/employee-tracker.git
   ```
3. Open the repo 
   ```sh
   cd employee-tracker
   ```
4. Open with VS Code
   ```sh
   code .
   ```

<!-- USAGE EXAMPLES -->
## Link to Demo

_Here is a link to my [Employee Tracker Walkthrough](https://watch.screencastify.com/v/9GAXgpWYltwSW4q69MZf)_

<!-- ROADMAP -->
## Roadmap

GIVEN a command-line application that accepts user input
- [x] WHEN I start the application
      THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- [x] WHEN I choose to view all departments
      THEN I am presented with a formatted table showing department names and department ids
- [x] WHEN I choose to view all roles
      THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- [x] WHEN I choose to view all employees
      THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- [x] WHEN I choose to add a department
      THEN I am prompted to enter the name of the department and that department is added to the database
- [x] WHEN I choose to add a role
      THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- [x] WHEN I choose to add an employee
      THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- [x] WHEN I choose to update an employee role
      THEN I am prompted to select an employee to update and their new role and this information is updated in the database

See the [closed issues](https://github.com/stvrmrz/employee-tracker/issues/1) for a full list of features.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Steve Ramirez - [@stvrmrz](https://twitter.com/stvrmrz) - stevearamirez@gmail.com

Project Link: [https://github.com/stvrmrz/employee-tracker](https://github.com/stvrmrz/employee-tracker)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are some of the resources that I used that I want to give credit to:

* [othneildrew Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [BCS Support Tutor](https://2u-20.wistia.com/medias/trfd1jx6o2)
* [AskBCS Learning Assistant]