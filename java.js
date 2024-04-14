// Function to format and return the person information
function getPersonInfo(data) {
  let personInfo = "";

  data.Person_Data.forEach((person) => {
    // Display each person's information
    personInfo += `<hr>`;
    personInfo += `<h3>Person:</h3>`;
    personInfo += `<p><strong>Name:</strong> ${person.fname} ${person.lname}</p>`;
    personInfo += `<p><strong>City:</strong> ${person.city}</p>`;
    personInfo += `<p><strong>Phone Number:</strong> ${person.phnum}</p>`;
    personInfo += `<p><strong>Occupation:</strong> ${person.occupation}</p>`;
    personInfo += `<p><strong>Age:</strong> ${person.age}</p>`;
  });
  return personInfo;
}

// Function to format and return the paragraph information
function getParagraphInfo(data) {
  let paraInfo = "";

  data.Person_Data.forEach((person) => {
    // Display each person's information as a sentence
    paraInfo += "<hr>";
    paraInfo += `${person.fname}, is a ${person.age}-year old who lives in ${person.city}. They have enjoyed working as a ${person.occupation} for ${person.time} years.<br>`;
  });
  return paraInfo;
}

// Function to format and return the interest information
function getInterestInfo(data) {
  let interestInfo = "";

  data.Person_Data.forEach((person) => {
    // Display each person's interests
    interestInfo += `<hr>`;
    interestInfo += `<h3>Person:</h3>`;
    interestInfo += `<p><strong>Name:</strong> ${person.fname} ${person.lname}</p>`;
    if (person.interests && person.interests.length > 0) {
      interestInfo += `<ul>`;
      person.interests.forEach((interest) => {
        interestInfo += `<li>${interest}</li>`;
      });
      interestInfo += `</ul>`;
    } else {
      interestInfo += `<p>No interests available</p>`;
    }
  });
  return interestInfo;
}

// Function to generate combined output
function generateOutput(data) {
  let output = "";

  output += getPersonInfo(data);
  output += getParagraphInfo(data);
  output += getInterestInfo(data);

  return output;
}

// Function to display the data in the HTML element
function displayData(data) {
  const output = document.querySelector("#output");
  output.innerHTML = `<div>${data}</div>`;
}

fetch(`./java.json`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`There is a HTTP ERROR!!!! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Call the function to generate combined output
    const combinedInfo = generateOutput(data);

    // Display the combined information
    displayData(combinedInfo);
  })
  .catch((error) => {
    console.log(`Error reading the JSON file:`, error);
  });
