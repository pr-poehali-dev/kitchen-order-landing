exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const TELEGRAM_BOT_TOKEN = '8224423916:AAFvsAaVCJvH5WD7_U2w26MIyb3ptODwuQk';
  const TELEGRAM_CHAT_ID = '800581249';

  try {
    const { message } = JSON.parse(event.body);

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } else {
      throw new Error('Telegram API error');
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};