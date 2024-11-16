const eating = true;
const sleeping = false;
const playing = false;

const eat = () => {
  return new Promise((res, rej) => {
    eating ? res("I am Eating") : rej("I am not Eating");
  });
};
const sleep = () => {
  return new Promise((res, rej) => {
    sleeping ? res("I am Sleeping") : rej("I am not Sleeping");
  });
};
const play = () => {
  return new Promise((res, rej) => {
    playing ? res("I am Playing") : rej("I am not Playing");
  });
};

const runAsyncAwait = async () => {
  try {
    const eatMessage = await eat();
    console.log(eatMessage);
    const sleepMessage = await sleep();
    console.log(sleepMessage);
    const playMessage = await play();
    console.log(playMessage);
  } catch (err) {
    console.error(`Error: `, err);
  }
};
runAsyncAwait();
