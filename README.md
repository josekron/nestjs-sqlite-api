### Description

Example of Nestjs app.

### Technologies

- Nestjs + Typescript + Sqlite

### How to run it

- docker build -t projectsapi .
- docker run -p 4000:4000 projectsapi
- Or just `npm install` & `npm run start:dev`

### Endpoint

- `GET /projects/search?status=XX&country=XX`: search projects by optional filters for status and country.

`curl -XGET 'http://localhost:3000/projects/search?status=Registration%20requested&country=China'`

`{
    "data": [
        {
            "id": "59b60280-0180-43de-9b2b-6ed1dcefb649",
            "url": "https://registry.verra.org/app/projectDetail/VCS/4341",
            "status": "Registration requested",
            "country": "China"
        }
    ]
}`

- `GET /projects/countries`: return the result as a map with the country name as the key.

`curl -XGET 'http://localhost:3000/projects/countries'`

`{
    "data": [
        "South Africa": [
            {
                "id": "cfafa6a2-6bca-45d1-9ae3-8ed7bc01d99d",
                "url": "https://registry.verra.org/app/projectDetail/VCS/4699",
                "status": "Under development",
                "country": "South Africa"
            },
            {
                "id": "0ef3046a-3de3-420f-9589-18f1620fcd55",
                "url": "https://registry.verra.org/app/projectDetail/VCS/4319",
                "status": "Under development",
                "country": "South Africa"
            }
        ],
        "China": [
            {
                "id": "b22abb14-9976-4b28-a0fe-51265b104d33",
                "url": "https://registry.verra.org/app/projectDetail/VCS/4639",
                "status": "Under validation",
                "country": "China"
            },
            {
                "id": "3a5d4249-fa79-4cfc-8818-da97e4851a3c",
                "url": "https://registry.verra.org/app/projectDetail/VCS/4367",
                "status": "Under validation",
                "country": "China"
            },
            {
                "id": "59b60280-0180-43de-9b2b-6ed1dcefb649",
                "url": "https://registry.verra.org/app/projectDetail/VCS/4341",
                "status": "Registration requested",
                "country": "China"
            }
        ],
    ]
}`
