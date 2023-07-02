const fs = require('fs');

exports.handler = async (event, context) => {
    try {
        const data = fs.readFileSync('../public/db.json', 'utf8');
        return {
            statusCode: 200,
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
};
