# getir-hackathon-preliminary.

Node + Express powered microservice for Getir+BiTaksi Hackathon
https://sahinolut-getir-app.herokuapp.com/

### VSCode

The preferred IDE for this project is VSCode.

#### API Docs

Has only one endpoint /searchRecords. Only accepts `POST` requets.
Assuming maxCount and minCount are integers and maxCount < minCount

#### Linting

Open a file to lint it automatically.

Press `Ctrl + Shift + B` on Windows or `CMD + Shift + B` on Mac to lint all of the files in the project.

I used to  my customized linter settings.[link](.eslintrc.json).

#### Prettifying

In the current setup, `prettifier-eslint` formats the file automatically after you save it. The prettifier uses the eslint configuration to format the code.
