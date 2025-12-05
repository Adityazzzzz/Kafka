const { kafka } = require('./client')

async function func() {
    const consumer = kafka.consumer({ groupId: 'test-group' })

    await consumer.connect()
    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value.toString())
        }
    })

}