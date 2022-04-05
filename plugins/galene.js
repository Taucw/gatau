import {ServerConnection} from '@/utils/protocol';

export default async ({ store }, inject) => {

  const serverConnection = new ServerConnection();
  try {
    await serverConnection.connect(`wss://galene.org:8443/ws`);
  } catch(e) {
    console.error('could not connect :(');
    console.error(e);
    store.commit('setConnected', false);
  }

  serverConnection.onconnected = function() {
    console.log('connected');
    store.commit('setConnected', true);
  }

  serverConnection.onclose = function() {
    console.log('closed connection');
    store.commit('setConnected', false);
  }

  inject('galene', serverConnection);
}