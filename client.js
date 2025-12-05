const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    brokers: ['https://localhost:9092'],
    clientId: 'consumer'
})
