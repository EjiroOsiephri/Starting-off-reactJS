class User {
  printName = () => {
    console.log(`printout ${user.age}`);
  };
}

function printName(user) {
  console.log(`printout ${user.age}`);
}

const user = new User("ejiro", 34);
console.log(user);
user.printName();
