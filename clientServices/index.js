import { Platform } from 'react-native'
import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

const OS = Platform.OS

const url = OS == 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080'
const heroku = 'https://voxfm-server.herokuapp.com/'
export const socket = io(heroku, {
    transports: ['websocket'],
    pingInterval: 3000,
    pingTimeout: 5000
})

const client = feathers()

client.configure(socketio(socket))

export const messageService = client.service('messages')
export const fbFeedService = client.service('feed')
export const voxInfoService = client.service('streamInfo')
export const emailService = client.service('email')
export const streamURlService = client.service('streamURL')