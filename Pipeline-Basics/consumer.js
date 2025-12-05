const { kafka } = require('./client')

const group = process.argv[2]

async function func() {
    const consumer = kafka.consumer({ groupId: group })

    await consumer.connect()
    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value.toString())
        }
    })

}

func()