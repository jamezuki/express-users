# express-users

- RESTful service with users data.
- CRUD operations with Express framework.
- Data stored in MongoDB Atlas.
- Deployed to Heroku.

**[Live Project](https://jamezuki-express-users.herokuapp.com/users)**

## Endpoints

### Get All

```
GET https://jamezuki-express-users.herokuapp.com/users
```

### Get One

```
GET https://jamezuki-express-users.herokuapp.com/users/id
```

### Create One

```
POST https://jamezuki-express-users.herokuapp.com/users
content-type: application/json

{
    "email": "test@test.com",
    "password": "password"
}
```

### Update One

```
PATCH https://jamezuki-express-users.herokuapp.com/users/id
content-type: application/json

{
    "password": "123456"
}
```

### Delete One

```
DELETE https://jamezuki-express-users.herokuapp.com/users/id
```

## Topics

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Middleware
- Routes
