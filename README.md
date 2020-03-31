# "Bring and Ring" GraphQL API firebase cloud function

## Local installation

1. Install Firebase CLI `npm install -g firebase-tools`
2. Login to Firebase `firebase login`
3. In the project root folder run `npm install` (have to use node 12)
4. To run function locally run `npm run serve`

## Local debugging with emulators

1. Make sure you have Java & Nodejs installed.
2. As emulators don't have hot reload, run `npm run start:debug`
3. In a separate console, start emulators with `npm run emulators`
