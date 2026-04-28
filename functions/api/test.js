export async function onRequestPost(context) {
  try {
    const response = await fetch('https://api.longcat.chat/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ak_2Ue8Yd1Xc9FT9ng5S235n1ts1SK7F'
      },
      body: JSON.stringify({
        model: 'LongCat-Flash-Chat',
        messages: [{ role: 'user', content: 'hello' }],
        max_tokens: 10
      })
    });
    
    if (response.ok) {
      return new Response(JSON.stringify({ status: 'success' }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
      return new Response(JSON.stringify({ status: 'failed', error: response.status }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ status: 'failed', error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
