/** @format */

let obj = {};

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let foundName = false,
    idx = -1;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      foundName = true;
      if (contacts[i][prop] != undefined) {
        idx = i;
        break;
      }
    }
  }
  if (foundName == true) {
    if (idx != -1) {
      return contacts[idx][prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
}
// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Harry", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Bob", "potato");
// lookUpProfile("Akira", "address");

// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  } else if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && records[id][prop] == undefined) {
    records[id][prop] = [];
    records[id][prop].push(value);
  } else if (prop == "tracks" && value != "") {
    records[id][prop].push(value);
  }
  return records;
}

console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
