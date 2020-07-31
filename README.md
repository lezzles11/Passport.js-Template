# Passport.js :rocket:

## Purpose :dark_sunglasses:

The purpose of this repository is to have a series of passport.js examples to reference to later.

### How to run this package

```
npm install
```

```
node controller.js
```

### How it works :open_book:

1. See if username matches username in db
2. Check if password matches password
3. Check if user has been authenticated already (look at sessions)
   3a. If already logged in, then allow them in
   3b. Otherwise, redirect to login/signup page

####

- [ ] To authenticate
- [ ] To redirect
- [ ] To give messages

## Important Vocabulary

| Word            |                                             Where it occurs                                              |                                  How it works                                  |
| --------------- | :------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
| Strategies      |                                          initial configuration                                           |                Authenticates by verifying username and password                |
| Verify Callback | after credentials, will invoke the verify callback with the username & pass. returns done if successful. |                 Finds user that has that username and password                 |
| initialize      |                                            Need to initialize                                            |                                                                                |
| sessions        |                                     after successful authentication                                      | passport will serialize and deserialize user instances to and from the session |
|                 |                                                                                                          |                                                                                |

### Where it fits :paperclip:

- [ ] Fits into node.js applications that require user authentication
      ![Passport.js](https://www.dropbox.com/s/4jew8ek5yfotopf/Passport.js.png?raw=1)

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to utilize passport.js well.

## Sprint :athletic_shoe:

| Done? | Component                                | Priority | Estimated Time | Actual Time |
| ----- | ---------------------------------------- | :------: | :------------: | :---------: |
|       | This checklist                           |    H     |    30 mins     |   30mins    |
|       | Complete diagram as to how passport fits |    M     |    30 mins     |   10mins    |
|       | Able to configure database               |    M     |    30 mins     |   15 mins   |
|       | Find user based on username and password |    M     |                |             |
|       | create strategy for passport             |    M     |                |             |
|       | Model example                            |    M     |                |             |
|       |                                          |    M     |                |             |
|       |                                          |    M     |                |             |
|       |                                          |    M     |                |             |

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)
[Passport.js](http://www.passportjs.org/)
[passport-local](https://github.com/jaredhanson/passport-local)
[express]()
[bodyParser]()
[session]()
[cors]()
[nodemon]()
[bcryptjs](https://www.npmjs.com/package/bcryptjs)
[example](https://github.com/passport/express-4.x-local-example/blob/master/db/users.js)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)
