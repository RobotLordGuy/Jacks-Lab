const projects = [
    {
        id: 0,
        title: 'Jacks RNG',
        thumbnail: 'thumbnails/project_1_thumbnail.png',
        field: 'engineering',
        description: 'An RNG based game where the player rolls for an aura. Each aura has a different chance of being rolled.',
        longDescription: `In this project I created a web game that can be played by anyone. The game was programed using HTML, CSS, and JavaScript. The goal of the game is to roll the rarest aura. The player clicks the roll button to roll an aura. There are many different types of aura each with its own chance of being rolled. The name of the auras are based off the popular Roblox game Sol's RNG, where each aura is named by its rarity. After the roll button is clicked the JavaScript loops through the auras randomly showing each one as it loops and making a sound effect for each aura in the loop. After the loop runs for a little bit, the aura is chosen through chance and is displayed on the screen. This project demonstrates my ability to build a game that uses chance.`,
        skills: ['HTML', 'JavaScript', 'CSS'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/JacksRNG',
        projectLink: 'https://robotlordguy.github.io/JacksRNG/'
    },
    {
        id: 1,
        title: 'Apple Todo List',
        thumbnail: 'thumbnails/project_2_thumbnail.png',
        field: 'engineering',
        description: 'A todo list inspired by Apples Reminders app. A place where people can store todos and complete them.',
        longDescription: `In this project I created a modern to-do list website inspired by the Apple's Reminders app. The project was programmed using HTML, CSS, and JavaScript. The website allows users to quickly add new tasks, mark tasks as completed, and remove tasks they no longer need. JavaScript dynamically creates and manages each task, while also saving the user's to-do list so it remains available after the page is refreshed. The interface features smooth animations, a clean layout, and an intuitive design that makes organizing daily tasks simple and enjoyable. This project demonstrates my ability to build an interactive web application with persistent data storage, dynamic DOM manipulation, and a polished user interface.`,
        skills: ['HTML', 'JavaScript', 'CSS'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/Apple-Todo-List',
        projectLink: 'https://robotlordguy.github.io/Apple-Todo-List/index.html'
    },
    {
        id: 2,
        title: 'Rock Paper Scissors Game',
        thumbnail: 'thumbnails/project_3_thumbnail.png',
        field: 'engineering',
        description: 'A simple rock paper scissors game that is played against a bot that randomly choses between the 3 options.',
        longDescription: `In this project I created a simple and interactive Rock Paper Scissors web game that can be played by anyone directly in the browser. The project was built using HTML, CSS, and JavaScript. The player chooses between rock, paper, or scissors by clicking a button, and the computer randomly generates its own choice using JavaScript logic. After both selections are made, the game compares the two choices using conditional statements to determine the winner based on the classic rock paper scissors rules. The result of each round is then displayed instantly on the screen, along with a message showing whether the player won, lost, or tied.`,
        skills: ['HTML', 'JavaScript', 'CSS'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/simple-rock-paper-scissors-game',
        projectLink: 'https://robotlordguy.github.io/simple-rock-paper-scissors-game/'
    },
    {
        id: 3,
        title: 'Connect 4 Game',
        thumbnail: 'thumbnails/project_4_thumbnail.png',
        field: 'engineering',
        description: 'A connect 4 game that is played against the computer. The computer plays at a low-medium skill level.',
        longDescription: `In this project I created a web-based Connect 4 game that can be played against a computer opponent. The game was programmed using HTML, CSS, and JavaScript. The goal of the game is to be the first player to connect four pieces in a row either horizontally, vertically, or diagonally. The player places pieces by clicking on a column, while the computer analyzes the board and chooses its move using JavaScript logic. After each turn, the game checks if either the player or the computer has connected four pieces and displays the winner when the game ends. This project demonstrates my ability to create an interactive game with dynamic game logic, win detection algorithms, computer AI, and real-time updates using JavaScript.`,
        skills: ['HTML', 'JavaScript', 'CSS'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/Connect-4-Game',
        projectLink: 'https://robotlordguy.github.io/Connect-4-Game/'
    },
    {
        id: 4,
        title: 'Simple Calculator',
        thumbnail: 'thumbnails/project_5_thumbnail.png',
        field: 'engineering',
        description: 'A simple calculator that supports addition, subtraction, multiplication, division, and decimals.',
        longDescription: `In this project I created a fully functional calculator that can be used to perform everyday mathematical calculations. The calculator was programmed using HTML, CSS, and JavaScript. Users can enter numbers and operations by clicking the on-screen buttons, and JavaScript processes each input to build and evaluate mathematical expressions. The calculator supports addition, subtraction, multiplication, division, decimal values, and clearing or deleting input, while updating the display in real time. This project demonstrates my ability to build an interactive web application by handling user input, implementing mathematical logic, and creating a clean, responsive interface.`,
        skills: ['HTML', 'JavaScript', 'CSS'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/Calculator',
        projectLink: 'https://robotlordguy.github.io/Calculator/'
    },
    {
        id: 5,
        title: 'Hybrid Pepper',
        thumbnail: 'thumbnails/project_6_thumbnail.jpeg',
        field: 'Biology',
        description: 'The creation of the Jack Pepper, a cross between the Shishito and Cayenne.',
        longDescription: `In this project I created a new hybrid pepper called the Jack Pepper by crossing a Shishito pepper with a Cayenne pepper. I chose the Shishito because it is flavorful and produces many fruits per plant, and the Cayenne because it is large and spicy. My goal was to create a pepper that produces many large fruits with good flavor and a medium level of heat. To make the cross, I collected pollen from a flower on one pepper plant and transferred it to the stigma of a flower on the other plant. I also removed the petals and anthers from the flower receiving the pollen to prevent self-pollination. This process was repeated on multiple flowers on both plants to increase the chances of success. Because the fruit produced after pollination is not the hybrid itself, but contains hybrid seeds, I planted those seeds to grow the first generation of Jack Peppers. Since hybrid peppers are genetically unstable in the early generations, each generation can look different as traits separate and recombine. By selecting and breeding the best plants over multiple generations, the variety gradually becomes more consistent until around the seventh generation, when the plants begin producing stable offspring that represent the true Jack Pepper.`,
        skills: ['Plant Breeding', 'Trait Selection'],
        details: [
            { label: 'Field', value: 'Biology' },
            { label: 'Status', value: 'Ongoing' }
        ],
        github: 'https://github.com/RobotLordGuy/Jack-Pepper'
    },
    {
        id: 6,
        title: 'Simple Sensor & Alert Arduino',
        thumbnail: 'thumbnails/project_7_thumbnail.jpeg',
        field: 'engineering',
        description: 'A very simple Arduino Project that uses an ultrasonic sensor and a green LED.',
        longDescription: `In this project I created a new hybrid pepper called the Jack Pepper by crossing a Shishito pepper with a Cayenne pepper. I chose the Shishito because it is flavorful and produces many fruits per plant, and the Cayenne because it is large and spicy. My goal was to create a pepper that produces many large fruits with good flavor and a medium level of heat. To make the cross, I collected pollen from a flower on one pepper plant and transferred it to the stigma of a flower on the other plant. I also removed the petals and anthers from the flower receiving the pollen to prevent self-pollination. This process was repeated on multiple flowers on both plants to increase the chances of success. Because the fruit produced after pollination is not the hybrid itself, but contains hybrid seeds, I planted those seeds to grow the first generation of Jack Peppers. Since hybrid peppers are genetically unstable in the early generations, each generation can look different as traits separate and recombine. By selecting and breeding the best plants over multiple generations, the variety gradually becomes more consistent until around the seventh generation, when the plants begin producing stable offspring that represent the true Jack Pepper.`,
        skills: ['C', 'C++', 'Arduino'],
        details: [
            { label: 'Field', value: 'Engineering' },
            { label: 'Status', value: 'Completed' }
        ],
        github: 'https://github.com/RobotLordGuy/Simple-Arduino-Sensor-Output'
    }
];
