# Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their name, species, and all zoos in which they have ever resided (including zoo name and address).

### Animal
- Animal ID, Animal name, Animal species, Zoo where they live

### Zoo
- Zoo Id, Zoo name, Zoo address, all animals in the zoo

Determine the database tables necessary to track this information.

Label any relationships between table.
- Many-to-Many


### Solution
Tables: Animals, Species, Zoos

- Anmal (Many) <==> Species (One)
- Zoos (many) <==> Animals (many)
    - Species - Zoos : no relation needed

### Table Details
- Species:
    - id
    - species_name
- Animals:
    - id
    - animal_name
    - species_name (Foreign key goes to 'many' relation)
- Zoos:
    - id
    - zoo_name
    - address
- Zoo_Animals:
    - zoo_id
    - animal_id

###
`npm install -g knex`
`npm install knex sqlite3`
`knex migrate:make create-tables`
`knex migrate:make create-tables`

`npm install sqlite3 --save`
`npm run server`

`knex migrate:latest`
`knex seed:run`