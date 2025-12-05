const { kafka } = require('./client')

async function func() {
    const producer = kafka.producer()
    await producer.connect()

    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                value: 'Rider updated'
            }
        ]
    })

    await producer.disconnect()
}
