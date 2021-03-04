import * as http from 'http2';
import { app } from './app';

const server = http.createServer(app);

server.listen(3333);