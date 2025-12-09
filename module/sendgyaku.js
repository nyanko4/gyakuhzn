const { sendchatwork } = require("../ctr/message");

async function sendgyaku(body, messageId, roomId, accountId) {
  try {
    const { data: quotes, error: quoteError } = await supabase
      .from("虐")
      .select("*")
      .eq("aid", 10788439)
      .order("time", { ascending: true });

    if (quoteError || !quotes || quotes.length === 0) {
      console.error("引用データ取得エラー:", quoteError);
      return await sendchatwork("該当する引用は見つかりませんでした。", roomId);
    }

    // 重複除去
    const seen = new Set();
    let str = "";
    for (const q of quotes) {
      const key = `${q.aid}_${q.time}_${q.message}`;
      if (!seen.has(key)) {
        seen.add(key);
        str += `[qt][qtmeta aid=${q.aid} time=${q.time}]${q.message}[/qt]\n`;
      }
    }

    await sendchatwork(str, roomId);
  } catch (err) {
    console.error("sendByAid関数エラー:", err);
  }
}

module.exports = sendgyaku;
