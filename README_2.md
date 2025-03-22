# Flatacuties Application

## Project Description
Flatacuties is a web-based application that allows users to view, vote for, add, and reset votes for various characters (or GIFs). The project is part of a coding challenge aimed at practicing basic JavaScript, HTML, and CSS while interacting with a JSON server.

## Live Demo
[Flatacuties Application](https://richard3wasonga.github.io/week-2-code-challenge-flatter-cutie-Richard3wasonga/)

## Features
- Display a list of characters from the JSON server.
- Show detailed information about a selected character.
- Add votes to a character.
- Reset votes to zero.
- Add new characters to the server.

## How to Use the Site
- Click on a character's name to view details and vote.
- Use the input field to add votes and submit.
- Click the 'Reset Votes' button to set votes to zero.
- Add new characters using the provided form.

## JavaScript Functions Explained
- `displayNames(character)`: Displays each character's name in the character bar and adds a click listener to show details.
- `displayinfo(info)`: Displays detailed information about the selected character.
- `addGif()`: Adds a new character to the JSON server.
- `deleteItem()`: Resets the selected character's votes to zero.
- `listener(element, event, callback)`: Adds an event listener to a specified element.

## Getting Started
### Prerequisites
- Install [Node.js](https://nodejs.org/) and npm (Node Package Manager).
- Install JSON Server globally using:

```bash
npm install -g json-server
```

### Setup
1. Clone this repository:

```Repository-link
git clone https://github.com/Richard3wasonga/week-2-code-challenge-flatter-cutie-Richard3wasonga.git
```

2. Navigate to the project folder:

```file-name
cd week-2-code-challenge-flatter-cutie-Richard3wasonga
```

3. Start the JSON server:

```server-url
json-server --watch db.json
```

4. Open the `index.html` file in your preferred browser.

## Example db.json Format
```json
{
  "characters": [
    {
      "id": "1",
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": "2",
      "name": "Mx. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    }
  ]
}
```

## Technologies Used
- JavaScript
- HTML
- CSS

## Future Enhancements
- Implement a search feature to find characters by name.
- Implement a delete option to remove characters.

## Author
Richard Wasonga - [GitHub Profile](https://github.com/Richard3wasonga)

## Project Repository
[Week 2 Code Challenge - Flatacuties](https://github.com/Richard3wasonga/week-2-code-challenge-flatter-cutie-Richard3wasonga)

## License
This project is licensed under the MIT License.

