const sendgyaku = require("../module/sendgyaku");

async function mentionWebhook(req, res) {
  const {
    from_account_id: accountId,
    room_id: roomId,
    message_id: messageId,
    body
  } = req.body.webhook_event;
  if (/\[(?:rp|返信) aid=\d+ to=\d+-\d+\]/.test(body)) {
    console.log("ok")
    return res.sendStatus(200);
  }

  if (accountId === 10788439) {
    console.log(accountId)
    await sendgyaku(body, messageId, roomId, accountId);
  }
  res.sendStatus(500);
}

module.exports = mentionWebhook;
