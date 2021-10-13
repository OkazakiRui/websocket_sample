const btn = document.getElementById('btn');
const txt = document.getElementById('txt');
const msg = document.getElementById('msg');

const sock = new WebSocket('ws://127.0.0.1:8000');

sock.addEventListener('open', (e) => {
  console.log('open');
  console.log(e);
});
sock.addEventListener('message', (e) => {
  console.log('message');
  console.log(e);
  console.log(e.data);
  msg.innerHTML += `<li>${e.data}</li>`;
});
sock.addEventListener('close', (e) => {
  console.log('close');
  console.log(e);
});
sock.addEventListener('error', (e) => {
  console.log('error');
  console.log(e);
});

btn.addEventListener('click', () => {
  sock.send(txt.value);
});
