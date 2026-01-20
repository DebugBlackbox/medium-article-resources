# medium-article-resources
Supporting Resources for the written Medium Article

# Project Structure
```
.
├── README.md
├── package.json
├── knexFiles.js
├── .env
├── package.json
├── docker-compose.yaml
├── src
│   ├── index.js
│   ├── app.js
│   └── routes
│       └── users.js
└── ...
```

- README.md: This file provides an overview of the repository and its contents.
- package.json: The package configuration file, which includes dependencies and scripts.
- src: The source code directory.
  - index.js: The entry point of the application, where the main function is defined.
  - app.js: The main application file, which sets up the Express server and defines the routes.
  - routes:
    - users.js: Demo users route to server user related API operations

# Database
Start Test Database in docker (Make sure host machine not running anything on 5432 port)
```bash
docker-compose up -d
```

# Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/medium-article-resources.git
```
2. Install the dependencies:
```bash
cd medium-article-resources
npm install
```
3. Start the test database:
```bash
docker-compose up -d
```
4. Start the application:
```bash
npm start
```

# Usage
The application is now running on http://localhost:3000. You can access the routes defined in app.js.

# Database
The application connects to a PostgreSQL database using the following environment variables:
- DB_HOST: The host of the database.
- DB_USER: The username for the database.
- DB_PASSWORD: The password for the database.
- DB_NAME: The name of the database.
- DB_PORT: The port of the database.

# Instruction
- Since we initialized repository with `type: module` we need to keep migration config manager `knexFile` with `.mjs` extension which then generates all migrations with `.mjs` extension
- whatever extension we keep for `knexFile` will be used for all migrations as well. This is what it is LoL!