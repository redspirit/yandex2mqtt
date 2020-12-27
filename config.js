module.exports = {

    mqtt: {
        host: 'mqtt.elki.io',
        port: 9883,
        user: 'client',
        password: '1234'
    },

    http: {
        port: 8055
    },

    clients: [
    {
        id: '1',
        name: 'Yandex',
        clientId: 'yandex-spirithome',
        clientSecret: 'jkdlf9834lkdsfn435s',
        isTrusted: false
        },
    ],

    users: [{
            id: '1',
            username: 'admin',
            password: 'admin',
            name: 'Administrator'
        },
        {
            id: '2',
            username: 'root',
            password: 'root',
            name: 'Administrator'
        },
    ],

    devices: [
    //_______________Первое устройство______________//
        {
            name: 'Черепахи',
            room: 'Спальня',
            type: 'devices.types.light',
            mqtt: [
                 {
                    type: 'on',
                    set: 'test_house/0xec1bbdfffec5dfd8/set',
                    stat: 'test_house/0xec1bbdfffec5dfd8'
                },
            ],
            capabilities: [
                {
                    type: 'devices.capabilities.on_off',
                    retrievable: true,
                    state: {
                        instance: 'on',
                        value: true
                    }
                },
             
            ]
        },
    //__________Конец первого устройства__________//
    

    ]
}
