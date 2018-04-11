import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

const url = 'http://localhost:8080'
const heroku = 'https://voxfm-server.herokuapp.com/'
export const socket = io(heroku, {
    transports: ['websocket'],
    forceNew: true,
    pingInterval: 50000,
    pingTimeout: 50000
})

const client = feathers()

client.configure(socketio(socket))

export const messageService = client.service('messages')
export const fbFeedService = client.service('feed')
export const voxInfoService = client.service('streamInfo')