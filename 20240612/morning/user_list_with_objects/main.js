const userList = [
  {
    id: 1,
    userName: "ursula_k_le_guin",
    firstName: "Ursula",
    lastName: "Le Guin",
    // age: 88,
    // email: "ursula@earthsea.com",
  },
  {
    id: 2,
    userName: "margaret_atwood",
    firstName: "Margaret",
    lastName: "Atwood",
    // age: 84,
    // email: "margaret@handmaid.com",
  },
  {
    id: 3,
    userName: "octavia_butler",
    firstName: "Octavia",
    lastName: "Butler",
    // age: 58,
    // email: "octavia@patternmaster.com",
  },
  {
    id: 4,
    userName: "n_k_jemisin",
    firstName: "N.K.",
    lastName: "Jemisin",
    // age: 50,
    // email: "nk@brokenearth.com",
  },
  {
    id: 5,
    userName: "ann_leckie",
    firstName: "Ann",
    lastName: "Leckie",
    // age: 56,
    // email: "ann@ancillary.com",
  },
  {
    id: 6,
    userName: "alix_e_harrow",
    firstName: "Alix",
    lastName: "Harrow",
    // age: 40,
    // email: "alix@ten_thousand_doors.com",
  },
  {
    id: 7,
    userName: "mary_robinette_kowal",
    firstName: "Mary Robinette",
    lastName: "Kowal",
    // age: 55,
    // email: "mary@ladyastronaut.com",
  },
  {
    id: 8,
    userName: "becky_chambers",
    firstName: "Becky",
    lastName: "Chambers",
    // age: 38,
    // email: "becky@wayfarers.com",
  },
];

const message = document.querySelector("#message");

function displayUserInfo(users) {
  const userInfoElement = document.querySelector("#person-info");
  // Clear previous content
  userInfoElement.textContent = "";
  // Iterate through users and display information
  users.forEach((user) => {
    const userInfoContainer = document.createElement("div");
    userInfoContainer.className = "person-info";

    const userIdDiv = Object.assign(document.createElement("div"), {
      id: `user-id-${user.id}`,
      class: "user-id",
      innerHTML: `User ID: ${user.id}`,
    });
    userInfoContainer.appendChild(userIdDiv);

    const usernameDiv = Object.assign(document.createElement("div"), {
      id: `user-name-${user.id}`,
      class: "user-name",
      innerHTML: `Username: ${user.userName}`,
    });
    userInfoContainer.appendChild(usernameDiv);

    const firstnameDiv = Object.assign(document.createElement("div"), {
      id: `first-name-${user.id}`,
      class: "first-name",
      innerHTML: `First name: ${user.firstName}`,
    });
    userInfoContainer.appendChild(firstnameDiv);

    const lastnameDiv = Object.assign(document.createElement("div"), {
      id: `last-name-${user.id}`,
      class: "last-name",
      innerHTML: `Last name: ${user.lastName}`,
    });
    userInfoContainer.appendChild(lastnameDiv);

    /*     const ageDiv = Object.assign(document.createElement("div"), {
      id: `age-${user.id}`,
      class: "age",
      innerHTML: `Age: ${user.age}`,
    });
    userInfoContainer.appendChild(ageDiv);

    const emailDiv = Object.assign(document.createElement("div"), {
      id: `email-${user.id}`,
      class: "email",
      innerHTML: `Email: ${user.email}`,
    });
    
    userInfoContainer.appendChild(emailDiv); */

    userInfoElement.appendChild(userInfoContainer);
  });
}

function removeUserById() {
  const userIdInput = document.querySelector("#user-id-input");
  const userIdToDelete = parseInt(userIdInput.value, 10); // Convert to number

  const userIndex = userList.findIndex((user) => user.id === userIdToDelete);
  if (userIndex !== -1) {
    userList.splice(userIndex, 1);
    displayUserInfo(userList); // Re-render the user list
    userIdInput.value = "";
    message.textContent = `👍 User with ID ${userIdToDelete} was successfully removed.`;
  } else {
    userIdInput.value = "";
    message.textContent = `👎 User with the specified ID (${userIdToDelete}) does not exist.`;
  }
}

const removeUserBtn = document.querySelector("#remove-user-btn");

removeUserBtn.addEventListener("click", () => {
  removeUserById();
});

displayUserInfo(userList);

function registerUser() {
  const userNameElement = document.querySelector("#add-user-username");
  const userName = userNameElement.value;
  const firstNameElement = document.querySelector("#add-user-firstname");
  const firstName = firstNameElement.value;
  const lastNameElement = document.querySelector("#add-user-lastname");
  const lastName = lastNameElement.value;

  if (!userName || !firstName || !lastName) {
    message.textContent = "👎 Please enter valid information in all fields.";
    return;
  }

  const newUserId = userList.length + 1;

  const newUser = {
    id: newUserId,
    userName: userName,
    firstName: firstName,
    lastName: lastName,
  };

  userList.push(newUser);

  console.log(userList);

  displayUserInfo(userList);

  message.textContent = "👍 User was added successfully.";

  clearRegistrationForm();
}

const addUserBtn = document.querySelector("#add-user-btn");

addUserBtn.addEventListener("click", () => {
  registerUser();
});

function clearRegistrationForm() {
  document.querySelector("#add-user-username").value = "";
  document.querySelector("#add-user-firstname").value = "";
  document.querySelector("#add-user-lastname").value = "";
}
