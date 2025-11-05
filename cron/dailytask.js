const { CronJob } = require("cron");
const supabase = require("../supabase/client");

function startDailyTask() {
  new CronJob(
    "0 0 0 * * *",
    async () => {
      await supabase.from("虐").upsert([
        {
          id: 0,
          aid: 0,
          time: 0,
          message: "bot",
        }
      ])
    },
    null,
    true,
    "Asia/Tokyo"
  );
}

module.exports = startDailyTask;
