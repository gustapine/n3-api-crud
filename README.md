#  PET API TIME 🐶

## ‼️This repository contains the the project made for n3 server-side class of the 3th semester.‼️

## Getting Started

Welcome to the documentation for the PET Management API. This API provides functionality to manage pets' data in relation to pets. With this API, you can perform various operations to handle pet-related information efficiently.

To begin using the PET Management API, please refer to the following sections for detailed information:

1. **Authentication**: Learn how to authenticate your requests to the API using JSON Web Tokens (JWTs). The authentication process ensures secure access to the pets' data.

2. **Endpoints**: Explore the available endpoints provided by the API to perform operations such as creating, retrieving, updating, and deleting pet data. Each endpoint has specific requirements and functionalities.

3. **Request and Response Formats**: Understand the structure and formats of requests and responses exchanged with the API. This knowledge will help you in constructing valid requests and effectively parsing and utilizing the received data.

4. **Error Handling**: Familiarize yourself with the error handling mechanism of the API. This section provides details on error codes, error messages, and how to handle and interpret the various error scenarios.

5. **Examples**: Find comprehensive examples illustrating how to interact with the API. These examples will guide you through common use cases and demonstrate the recommended approach for making requests and handling responses.

Please ensure that you have the necessary authentication credentials and authorization to access and manipulate the pets' data through the API. If you encounter any difficulties or have further questions, our support team is ready to assist you.

Let's get started with the PET Management API and empower you to efficiently manage pets' pet-related information.

### Base URLs

In the given scenario, we will be working with three specific types of objects: Pets, Tutors, and Heights. However, our current focus will be on Pets administration since that is our primary concern at the moment. To interact with the necessary endpoints, we have the following base URLs:

1. Pets API:
   - Base URL: `http://localhost:5000/api/pet`  ‼️ This is the one ‼️

2. Tutors API:
   - Base URL: `http://localhost:5000/api/tutor`

3. Heights API:
   - Base URL: `http://localhost:5000/api/altura`

In addition to the object-specific APIs, we also have an authentication pathway to handle the generation and authentication of JSON Web Tokens (JWTs). The base URL for the authentication API is:

- Authentication API:
  - Base URL: `http://localhost:5000/api/auth`

By utilizing these base URLs, you can construct the appropriate endpoints to perform the necessary operations related to Pets administration and authentication using JWTs.

## Retrieve All Pets

Retrieves information for all pets.

- Endpoint: GET ```/getAllOverPets```
- Response Format: JSON
- Response Body:

```json
{
  "data": [
    {
        "cod_pet": 4,
        "nome_pet": "Chico",
        "genero_pet": "Macho",
        "tutor": 5,
        "altura": 2,
        "createdAt": "2023-06-19T01:56:01.000Z",
        "updatedAt": "2023-06-19T01:56:01.000Z"
    },
    {
        "cod_pet": 3,
        "nome_pet": "joquinha",
        "genero_pet": "tatu",
        "tutor": 1,
        "altura": 2,
        "createdAt": "2023-06-17T15:15:05.000Z",
        "updatedAt": "2023-06-17T15:15:05.000Z"
    },
    ...
  ]
}
```
## Retrieve Pet by ID

Retrieves information for a specific pet by their ID.

- Endpoint: GET ```/:id```
- Parameters:
- id: The ID of the pet
- Response Format: JSON
- Response Body:

```json
{
    "cod_pet": 1,
    "nome_pet": "juju",
    "genero_pet": "cachorro",
    "tutor": 1,
    "altura": 1,
    "createdAt": null,
    "updatedAt": null
}
```
## Create Pet

Creates a new pet:

- Endpoint: POST ```/addPet```
- Request Format: JSON
- Request Body:

```json
{
    "cod_pet": 11,
    "nome_pet": "caio",
    "genero_pet": "cachorro",
    "tutor": 9,
    "altura": 1
}
```
## Update Pet

Updates the information for a specific pet by their ID.

- Endpoint: PUT ```/:id```
- Parameters:
-  id: The ID of the pet
- Request Format: JSON
- Request Body:

```json
{
    "cod_pet": 13,
    "nome_pet": "ca2o",
    "genero_pet": "cachorro",
    "tutor": 9,
    "altura": 1
}
```
## Delete Pet

Deletes a specific pet by their ID.

- Endpoint: DELETE ```/:id```
- Parameters:
- id: The ID of the pet
- Response Format: JSON
- Response Body:

```json
O Pet foi excluido
```
## Retrieve Pet by Height

Retrieves email information for a specific pet by their ID.

- Endpoint: GET ```/altura/:altura```
  - Here you'll have three options to input: 'pequena', 'media' or  'grande'.
- Parameters:
- id: The ID of the pet
- Response Format: JSON
- Response Body:

```json
{
    "nome_pet": "juju",
    "genero_pet": "cachorro",
    "altura": 1
}
```
## Retrieve Pet by Tutor

Retrieves pet information for specifics pets by their tutor.

- Endpoint: GET ```/nomeTutor/:nome```
    - Here you can try ```Gustavo```
- Parameters:
- nome: The name of the tutor
- Response Format: JSON
- Response Body:

```json
[
    {
        "nome_pet": "juju",
        "genero_pet": "cachorro",
        "altura": 1
    },
    {
        "nome_pet": "joquinha",
        "genero_pet": "tatu",
        "altura": 2
    },
    {
        "nome_pet": "marcola",
        "genero_pet": "macho",
        "altura": 2
    }
]
```
## Authentication

Now you'll have to to change the url to : `http://localhost:5000/api/auth`. This will generate a token to access the application:

- Endpoint: POST ```/auth/login```
- Request Format: JSON
- Request Body:
```json
{
    "email": "gus@gmail.com" ,
    "senha": "jnjn##ss"
}
```
- Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg3NjUwMzc1LCJleHAiOjE2ODc2NTA1NTV9.FxR0AZGOPx-O0Bf1b0xqQfzycwdjVk6i-aSzBStB8ho"
}
```

```bash
Feel free to copy and paste this Markdown format directly into your README.md file on GitHub.

I hope this helps!
```
