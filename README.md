# Backend Challenge
## The Challenge
* Clone this repo
* Create a GraphQL mutation that allows the modification of a users first name, last name, email address, and/or country
* Be type safe
* Bonus points if you can clean up my code in the process
* Check this code into your own public GitHub repo, and send me a PR against this repo
## Requirements
### PostGreSQL
You will need a local PostGreSQL database, which can be created with the following commands. I will leave installing the PostGreSQL database to you and your own specific device.

`$ psql`

`CREATE DATABASE test;`

`\c test`

`CREATE USER testuser WITH PASSWORD 'testpassword';`

`GRANT ALL PRIVILEGES ON DATABASE test TO testuser;`
### knex
I have left knex migrations and seed files for you to use to populate your local database. Assuming your database is up and running, this is all you need to import the test data.

`npx knex migrate:latest`

`npx knex seed:run`
