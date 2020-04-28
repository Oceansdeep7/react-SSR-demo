import React from 'react';
import Dashboard from '../../client/pages/Dashboard';
import {renderToString} from 'react-dom/server';

export default (ctx, next) => {

  const html = renderToString(<Dashboard/>);
  ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html} <span>测试内容</span>
    </div>
</body>
</html><script type="text/javascript"  src="index.js"></script>
`;

  return next();
}
