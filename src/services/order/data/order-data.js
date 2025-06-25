export const demoOrders = [
    {
        "gigId": "g101",
        "buyer": { "_id": "u102", "fullname": "John Doe" },
        "seller": { "_id": "u101", "fullname": "frederickkessie" },
        "createdAt": Date.now(),
        "dueDate": new Date('2025-06-11').getTime(),
        "status": "ACTIVE",
        "price": 172,
        "orderDate":new Date('2025-05-11').getTime()

    },
    {
        "gigId": "g102",
        "buyer": { "_id": "u102", "fullname": "Jane Smith" },
        "seller": { "_id": "u103", "fullname": "vividstore" },
        "createdAt": Date.now(),
        "dueDate": "",
        "status": "COMPLETED",
        "price": 151,
        "orderDate":new Date('2025-06-03').getTime()

    },
    {
        "gigId": "g103",
        "buyer": { "_id": "u102", "fullname": "Jane Smith" },
        "seller": { "_id": "u103", "fullname": "vividstore" },
        "createdAt": Date.now(),
        "dueDate": new Date('2025-06-15').getTime(),
        "status": "CANELLED",
        "price": 151,
        "orderDate":new Date('2024-05-03').getTime()
    }
]