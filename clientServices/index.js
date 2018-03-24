import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

const socket = io('http://localhost:8080/', {
    transports: ['websocket'],
    forceNew: true,
    pingInterval: 10000,
    pingTimeout: 50000        
})

const client = feathers()

client.configure(socketio(socket))

const messageService = client.service('messages')
const fbFeedService = client.service('feed')
const voxStreamInfo = client.service('streamInfo')

module.exports = {
    client,
    messageService,
    fbFeedService,
    voxStreamInfo
}