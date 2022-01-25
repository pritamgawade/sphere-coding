# Backend Challenge
## Requirements
### PostGreSQL
You will need a local PostGreSQL database, which can be created with the following commands

`$ psql`
`CREATE DATABASE test;`
logout <Ctrl + D>
`$ psql -d test`
`CREATE USER testuser WITH PASSWORD 'testpassword';`
`GRANT ALL PRIVILEGES ON DATABASE test TO testuser;`
