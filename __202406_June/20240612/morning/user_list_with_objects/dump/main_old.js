const userList = [
  {
    id: 1,
    username: "ursula_k_le_guin",
    firstName: "Ursula",
    lastName: "Le Guin",
    age: 88,
    email: "ursula@earthsea.com",
  },
  {
    id: 2,
    username: "margaret_atwood",
    firstName: "Margaret",
    lastName: "Atwood",
    age: 84,
    email: "margaret@handmaid.com",
  },
  {
    id: 3,
    username: "octavia_butler",
    firstName: "Octavia",
    lastName: "Butler",
    age: 58,
    email: "octavia@patternmaster.com",
  },
  {
    id: 4,
    username: "n_k_jemisin",
    firstName: "N.K.",
    lastName: "Jemisin",
    age: 50,
    email: "nk@brokenearth.com",
  },
  {
    id: 5,
    username: "ann_leckie",
    firstName: "Ann",
    lastName: "Leckie",
    age: 56,
    email: "ann@ancillary.com",
  },
  {
    id: 6,
    username: "alix_e_harrow",
    firstName: "Alix",
    lastName: "Harrow",
    age: 40,
    email: "alix@ten_thousand_doors.com",
  },
  {
    id: 7,
    username: "mary_robinette_kowal",
    firstName: "Mary Robinette",
    lastName: "Kowal",
    age: 55,
    email: "mary@ladyastronaut.com",
  },
  {
    id: 8,
    username: "becky_chambers",
    firstName: "Becky",
    lastName: "Chambers",
    age: 38,
    email: "becky@wayfarers.com",
  },
];

console.log(userList);

function displayUserInfo(users) {
  const personInfoElement = document.querySelector("#person-info");
  // Clear previous content
  personInfoElement.textContent = "";
  // Iterate through users and display information
  users.forEach((user) => {
    const userIdDiv = Object.assign(document.createElement("div"), {
      id: `user-id-${user.id}`,
      class: "user-id",
      innerHTML: `ID: ${user.id}`,
    });
    personInfoElement.append(userIdDiv);
    const usernameDiv = Object.assign(document.createElement("div"), {
      id: `user-name-${user.id}`,
      class: "user-name",
      innerHTML: `Username: ${user.username}`,
    });
    personInfoElement.append(usernameDiv);
    const firstnameDiv = Object.assign(document.createElement("div"), {
      id: `first-name-${user.id}`,
      class: "first-name",
      innerHTML: `First name: ${user.firstName}`,
    });
    personInfoElement.append(firstnameDiv);
    const lastnameDiv = Object.assign(document.createElement("div"), {
      id: `last-name-${user.id}`,
      class: "last-name",
      innerHTML: `Last name: ${user.lastName}`,
    });
    personInfoElement.append(lastnameDiv);
    const ageDiv = Object.assign(document.createElement("div"), {
      id: `age-${user.id}`,
      class: "age",
      innerHTML: `Age: ${user.age}`,
    });
    personInfoElement.append(ageDiv);
    const emailDiv = Object.assign(document.createElement("div"), {
      id: `email-${user.id}`,
      class: "email",
      innerHTML: `Email: ${user.age}`,
    });
    personInfoElement.append(emailDiv);
    // const userInfoParagraph = document.createElement("div");
    // userInfoParagraph.innerHTML = `ID: ${user.id}<br>
    // User name: ${user.username}<br>
    // First Name: ${user.firstName}<br>
    // Last Name: ${user.lastName}<br>
    // Age: ${user.age}<br>
    // Email: ${user.email}`;
    // personInfoElement.appendChild(userInfoParagraph);
  });
}

function removeUserById() {
  const userIdInput = document.querySelector("#user-id-input");
  const userIdToDelete = parseInt(userIdInput.value);

  const indexToRemove = userList.findIndex(
    (user) => user.id === userIdToDelete
  );
  
  if (indexToRemove !== -1) { // Check if id is present in list
    userList.splice(indexToRemove, 1);
    displayUserInfo(userList);
    userIdInput.value = "";
    message.textContent = `User with ID ${userIdToDelete} was successfully removed.`;
  }
  else {
    const message = document.querySelector("#message");
    message.textContent = "User with the specified ID does not exist.";
  }
}

//forEach = discarded
// users.forEach((user) => {
//   if (user.id === userIdToDelete) {
//     users.splice(index, 1);
//   }
// });

const removeUserBtn = document.querySelector("#remove-user-btn");

removeUserBtn.addEventListener("click", () => {
  removeUserById();
});

displayUserInfo(userList);

function addUser() {

}