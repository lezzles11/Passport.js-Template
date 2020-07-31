// Fake data
let users = [
  {
    id: 1,
    username: "lesley",
    password: "shibainu",
  },
  {
    id: 2,
    username: "sam",
    password: "pugspugs",
  },
];

// Find the user by id
exports.findById = function (id, callback) {
  // process next tick docs: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
  // begins processing event loop
  process.nextTick(function () {
    let index = id - 1;
    // if the user id exists
    if (users[index]) {
      // return the user
      // callback is a function called at the completion of a task, such as looking for user in the array
      callback(null, users[index]);
    } else {
      // otherwise, call error
      callback(new Error("User " + id + " does not exist"));
    }
  });
};

// Find user by username
exports.findByUsername = function (username, callback) {
  process.nextTick(function () {
    // Loop through the users
    for (var i = 0; i < users.length; i++) {
      let currentUser = users[i];
      // if the current user === passed in user
      if (currentUser.username === username) {
        // return that user
        return callback(null, currentUser);
      }
    }
    // otherwise, return nothing
    return callback(null, null);
  });
};
