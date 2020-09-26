const MICROSERVICE_APP = process.env.MICROSERVICE_APP;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${MICROSERVICE_APP} rocks!`);
    await sleep(5000);
  }
}

main();
