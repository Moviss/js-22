// const getUserData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('1. get user data');
//       resolve({ name: 'Jan' });
//     }, 600);
//   });
// };
//
// const registerUser = (user) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`2. register user: ${user.name}`);
//       resolve({ name: user.name, id: 83783738 });
//     }, 400);
//   });
// };
//
// const sendEmail = (registeredUser) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(
//         `3. send confirmation email to ${registeredUser.name} with id ${registeredUser.id}`);
//       resolve();
//     }, 500);
//   });
// };

// getUserData()
//   .then((user) => registerUser(user))
//   .then((registeredUser) => sendEmail(registeredUser))
//   .then(() => console.log("end!"));

// async function myAsyncFunction () {
//   try {
//     const user = await getUserDataReject();
//     const registeredUser = await registerUser(user);
//     await sendEmail(registeredUser);
//   } catch (e) {
//     console.error(e.message);
//   }
// }

// const x = async function () {
//   console.log(x);
// }

// const obj = {
//   async x() {
//     await getUserData();
//   }
// }

// class User {
//   async x() {
//
//   }
// }

// myAsyncFunction();

// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   return await response.json();
// };
//
// const doIt = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (e) {
//     console.error(e.message);
//   }
// }
//
// doIt();

// fetchUsers().
//   then(users => console.log(users)).
//   catch(e => console.error(e.message));


const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  })

  const users = await Promise.all(arrayOfPromises);

  console.log(users);
};

fetchUsers();

