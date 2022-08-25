import SocketClient from 'socket.io-client'
import config from '../config'

const socket = SocketClient(config.API)
export default socket