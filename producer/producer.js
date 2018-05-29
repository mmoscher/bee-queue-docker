var Queue = require('bee-queue');
const queue = new Queue('email', {
  redis: {
    host: 'redis',
    port: 6379
  },
  isWorker: false,
});

var sequence = 0;

queue.on('error', (err) => {
  console.log(`[Producer] A queue error happened: ${err.message}`);
});

queue.on('failed', (job, err) => {
  console.log(`[Producer] Job ${job.id} failed with error ${err.message}`);
});

setInterval(
  function() {
    sequence += 1;
    (function(){
      var job = queue.createJob({
          title: 'Email',
          to: 'tj@learnboost.com',
          template: 'welcome-email',
      });
      console.log("job created");

      job.save();

      job.on('succeeded', (result) => {
        console.log(`Received result for job ${job.id}: ${result}`);
      });

      job.on('failed', (err) => {
        console.log(`Job ${job.id} failed with error ${err.message}`);
      });

    })(sequence);
  }
  , 500);

