export const demoOrders = [
    {
        "gigId": "g101",
        "buyer": { "_id": "u102", "fullname": "John Doe" },
        "seller": { "_id": "u101", "fullname": "frederickkessie" },
        "createdAt": Date.now(),
        "dueDate": new Date('2025-06-11').getTime(),
        "status": "pending",
        "price": 172
    },
    {
        "gigId": "g102",
        "buyer": { "_id": "u102", "fullname": "Jane Smith" },
        "seller": { "_id": "u103", "fullname": "vividstore" },
        "createdAt": Date.now(),
        "dueDate": new Date('2025-06-15').getTime(),
        "status": "completed",
        "price": 151
    }
]