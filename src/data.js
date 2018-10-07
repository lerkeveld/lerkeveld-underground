export default {
    "user": {
        "firstName": "Test",
        "lastName": "Test",
        "room": "0",
        "corridor": "N0",
        "email": "test.test@domain.com",
        "phone": "0000 00 00 00"
    },
    "searches": [
        {
            "firstName": "Test",
            "lastName": "Test",
            "room": "0",
            "corridor": "N0",
            "email": "test.test@domain.com",
            "phone": "0000 00 00 00"
        },
    ],
    "reservations": [
        {
            "date": new Date(new Date().setDate(new Date().getDate() + 1)),
            "user": "Test Test 1",
            "description": "Evenement 1",
            "id": 1
        },
        {
            "date": new Date(new Date().setDate(new Date().getDate() + 3)),
            "user": "Test Test 2",
            "description": "Evenement 2",
            "id": 2
        },
        {
            "date": new Date(new Date().setDate(new Date().getDate() + 5)),
            "user": "Test Test 3",
            "description": "Evenement 3",
            "id": 3
        },
        {
            "date": new Date(new Date().setDate(new Date().getDate() + 7)),
            "user": "Test Test 4",
            "description": "Evenement 4",
            "id": 4
        },
        {
            "date": new Date(new Date().setDate(new Date().getDate() + 9)),
            "user": "Test Test 5",
            "description": "Evenement 5",
            "id": 5
        }
    ]
}
