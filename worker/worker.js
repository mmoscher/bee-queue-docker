var Queue = require('bee-queue');
const queue = new Queue('email', {
  redis: {
    host: 'redis',
    port: 6379
  },
  isWorker: true,
});

queue.on('error', (err) => {
  console.log(`[Worker] A queue error happened: ${err.message}`);
});

queue.on('failed', (job, err) => {
  console.log(`[Worker] Job ${job.id} failed with error ${err.message}`);
});

queue.process(function(job, done) {
  console.log(job.data);
  setTimeout(() => {
    try {
      // do all the work here
      console.log(`Processing job ${job.id}`);
      console.log('email was sent!');
      done(null, job.id);
    } catch (e) {
      console.log("fail");
      done(e.message);
    }
  }, 2000);
});