 connect = require('connect');
const URL = require('url');

function calculate(url) {
    const parsedUrl = URL.parse(url, true);
    const method = parsedUrl.query.method;
    const x = parseFloat(parsedUrl.query.x);
    const y = parseFloat(parsedUrl.query.y);
  
    let result;
    let operation;
  
    switch (method) {
      case 'add':const
        result = x + y;
        operation = '+';
        break;
      case 'subtract':
        result = x - y;
        operation = '-';
        break;
      case 'multiply':
        result = x * y;
        operation = '*';
        break;
      case 'divide':
        result = x / y;
        operation = '/';
        break;
      default:
        return 'Invalid method';
    }
  
    return `${x} ${operation} ${y} = ${result}`;
  }
  const app = connect();

app.use((req, res) => {
  const result = calculate(req.url);
  res.end(result);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
