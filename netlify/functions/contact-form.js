exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Check honeypot
    if (data['bot-field']) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Bot detected' })
      };
    }

    // Netlify automatically sends notification emails if configured
    // We just need to return success
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Form submitted successfully'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
