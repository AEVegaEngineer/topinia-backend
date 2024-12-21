# Topinia Backend

### a project built using nestjs

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

To run this project:

1. Clone the project
2. Install dependencies `npm install`
3. Ask for an updated `.env` file or alternatively fill `.env.template` and rename to `.env`
4. Start the database

```
- docker-compose up -d
```

5. run the project `npm run start:dev`

## Production builds

- In the file project.json, you can find the configuration for the production build. Specifically beware of the `build.configurations.production mappings`.
- Make sure to deploy the microservices first and then the API Gateway
