const { kafka } = require('./clinet')

async function func() {
    const admin = kafka.admin()
    console.log('admin connecting');

    await admin.connect()
    console.log('admin connected');

    await admin.createTopics({
        topics: [
            {
                topic: 'rider-updates',
                numPartitions: 2,
            },
            {
                topic: 'driver-updates',
                numPartitions: 2,
            }
        ],
    });

    await admin.disconnect()
}

func()