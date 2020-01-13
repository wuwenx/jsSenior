var par = require("./program")

par.increment(10, 8);
// process.nextTick()属于idle观察者，setImmediate() 属于check观察者。
// 在每一个轮循环检查中，idle 观察者先于I/O观察者，I/O观察者先于check观察者。
process.nextTick(() => {
  console.log(1)
})
setImmediate(() => {
  console.log(2)
})
console.log(3)
// 加入两个nextTick()的回调函数
process.nextTick(function () {
  console.log('nextTick延迟执行1');
});
process.nextTick(function () {
  console.log('nextTick延迟执行2');
});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
  console.log('setImmediate延迟执行1');
  // 进入下次循环
  process.nextTick(function () {
    console.log('强势插入');
  });
});
setImmediate(function () {
  console.log('setImmediate延迟执行2');
});
console.log('正常执行');

//#region  自定义Promise的实现
var Promise = function () {
  EventEmitter.call(this);
};
util.inherits(Promise, EventEmitter);

Promise.prototype.then = function (fulfilledHandle) {
  if (typeof fulfilledHandler === 'function') {
    // 利用once()方法，保证成功回调只执行一次
    this.once('success', fulfilledHandler);
  }
  if (typeof errorHandler === 'function') {
    // 利用once()方法，保证异常回调只执行一次
    this.once('error', errorHandler);
  }
  if (typeof progressHandler === 'function') {
    this.on('progress', progressHandler);
  } return this;
};


var Deferred = function () {
  this.state = 'unfulfilled';

  this.promise = new Promise();
};

Deferred.prototype.resolve = function (obj) {
  this.state = 'fulfilled';
  this.promise.emit('success', obj);
};

Deferred.prototype.reject = function (err) {
  this.state = 'failed';
  this.promise.emit('error', err);
};

Deferred.prototype.progress = function (data) {
  this.promise.emit('progress', data);
};
var promisify = function (res) {
  var deferred = new Deferred();
  var result = '';
  res.on('data', function (chunk) {
    result += chunk;
    deferred.progress(chunk);
  });
  res.on('end', function () {
    deferred.resolve(result);
  });
  res.on('error', function (err) {
    deferred.reject(err);
  });
  return deferred.promise;
};
promisify(res)
  .then(function () {
    // Done
  }, function (err) {
    // Error
  }, function (chunk) {   // progress
    console.log('BODY: ' + chunk);
  });



/**
*	Creates 	a 	Node-
  style callback that will resolve or reject the def  * promise.
*	@returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
  var self = this;
  return function (error, value) {
    if (error) {
      self.reject(error);
    } else if (arguments.length > 2) {
      self.resolve(array_slice(arguments, 1));
    } else {
      self.resolve(value);
    }
  };
};
Deferred.prototype.all = function (promises) {
  var count = promises.length; var that = this; var results = []; promises.forEach(function (promise, i) {
    promise.then(function (data) {
      count--; results[i] = data; if (count === 0) {
        that.resolve(results);
      }
    }, function (err) {
      that.reject(err);
    });
  });
  return this.promise;
};



var emitter = new event.Emitter();
emitter.on("step1", function () {
  obj.api1(function (value1) {
    emitter.emit("step2", value1);
  });
});

emitter.on("step2", function (value1) {
  obj.api2(value1, function (value2) {
    emitter.emit("step3", value2);
  });
});

emitter.on("step3", function (value2) {
  obj.api3(value2, function (value3) {
    emitter.emit("step4", value3);
  });
});

emitter.on("step4", function (value3) {
  obj.api4(value3, function (value4) {
    callback(value4);
  });
});

emitter.emit("step1");

smooth(fs.readFile);
var smooth = function (method) {
  return function () {
    var deferred = new Deferred(); var args = Array.prototype.slice.call(arargs.push(deferred.callback()); method.apply(null, args); return deferred.promise;
  };
};

//#endregion

var app = connect(); // Middleware
app.use(connect.staticCache());
app.use(connect.static(__dirname + '/public'));
app.use(connect.cookieParser());
app.use(connect.session());
app.use(connect.query());
app.use(connect.bodyParser());
app.use(connect.csrf());
app.listen(3001);


function createServer() {
  function app(req, res) {
    app.handle(req, res);
  }
  utils.merge(app, proto);
  utils.merge(app, EventEmitter.prototype);
  app.route = '/';
  app.stack = [];
  for (var i = 0; i < arguments.length; ++i) {
    app.use(arguments[i]);
  }
  return app;
};
app.use = function (route, fn) {
  // some code
  this.stack.push({ route: route, handle: fn });
  return this;
};
app.listen = function () {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

async.series([function (callback) {
  fs.readFile('file1.txt', 'utf-8', callback);
},
function (callback) {
  fs.readFile('file2.txt', 'utf-8', callback);
}
], function (err, results) {
  // results => [file1.txt, file2.txt]
});

fs.readFile('file1.txt', 'utf-8', function (err, content) {
  if (err) {
    return callback(err);
  }
  fs.readFile('file2.txt', 'utf-8', function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, [content, data]);
  });
});
async.parallel([
  function (callback) {
    fs.readFile('file1.txt', 'utf-8', callback);
  },
  function (callback) {
    fs.readFile('file2.txt', 'utf-8', callback);
  }
], function (err, results) {
  // results => [file1.txt, file2.txt]
});
var counter = 2; var results = [];
var done = function (index, value) {
  results[index] = value;
  counter--;
  if (counter === 0) {
    callback(null, results);
  }
};
var hasErr = false; var fail = function (err) {
  if (!hasErr) {
    hasErr = true; callback(err);
  }
};
fs.readFile('file1.txt', 'utf-8', function (err, content) {
  if (err) {
    return fail(err);
  }
  done(0, content);
});
fs.readFile('file2.txt', 'utf-8', function (err, data) {
  if (err) {
    return fail(err);
  }
  done(1, data);
});


var foo = function () {
  var local = 'local var';
  var bar = function () {
    var local = 'another var';
    var baz = function () {
      console.log(local);
    };
    baz();
  };
  bar();
};
foo();

global.foo = "I am global object";
console.log(global.foo); // => "I am global object
delete global.foo;
// 或者重新赋值
global.foo = undefined; // or null
console.log(global.foo); // => undefined


var foo = function () {
  var local = "局部变量";
  (function () {
    console.log(local);
  }());
};
var foo = function () {
  (function () {
    var local = "局部变量";
  }());
  console.log(local);
};

var foo = function () {
  var bar = function () {
    var local = "局部变量";
    return function () {
      return local;
    };
  };
  var baz = bar();
  console.log(baz());
};

var showMem = function () {
  var mem = process.memoryUsage();
  var format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB'
  };
  console.log('Process: heapTotal ' +
    format(mem.h) + ' heapUsed ' + format(mem.heapUsed) + ' rss '  
   console.log('-----------------------------------------------------------')
};



var useMem = function () {
  var size = 20 * 1024 * 1024; var arr = new Array(size); for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }
  return arr;
};

var cache = {};
var get = function (key) {
  if (cache[key]) {
    return cache[key];
  } else {
    // get from otherwise
  }
};
var set = function (key, value) {
  cache[key] = value;
};
//#region 自定义缓存策略
var LimitableMap = function (limit) {
  this.limit = limit || 10; this.map = {}; this.keys = [];
};

var hasOwnProperty = Object.prototype.hasOwnProper

LimitableMap.prototype.set = function (key, value) {
  var map = this.map; var keys = this.keys;
  if (!hasOwnProperty.call(map, key)) {
    if (keys.length === this.limit) {
      var firstKey = keys.shift();
      delete map[firstKey];
    }
    keys.push(key);
  }
  map[key] = value;
};
LimitableMap.prototype.get = function (key) {
  return this.map[key];
};
//#endregion



var leakArray = []; var leak = function () {
  leakArray.push("leak" + Math.random());
};
http.createServer(function (req, res) {
  leak();
  res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello World\n');
}).listen(1337); console.log('Server running at http://127.0.0.1:1337/');



var memwatch = require('memwatch');
memwatch.on('leak', function (info) {
  console.log('leak:'); console.log(info);
});
memwatch.on('stats', function (stats) {
  console.log('stats:');
  console.log(stats);
});
var http = require('http');
var leakArray = [];
var leak = function () {
  leakArray.push("leak" + Math.random());
};
http.createServer(function (req, res) {
  leak(); res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');




var memwatch = require('memwatch'); var leakArray = []; var leak = function () {
  leakArray.push("leak" + Math.random());
};

// Take first snapshot
var hd = new memwatch.HeapDiff();

for (var i = 0; i < 10000; i++) {
  leak();
}

// Take the second snapshot and compute the diff var diff = hd.end();
console.log(JSON.stringify(diff, null, 2));
var reader = fs.createReadStream('in.txt');
var writer = fs.createWriteStream('out.txt');
reader.on('data', function (chunk) {
  writer.write(chunk);
});
reader.on('end', function () {
  writer.end();
});
var reader = fs.createReadStream('in.txt');
var writer = fs.createWriteStream('out.txt');
reader.pipe(writer);


var str = "深入浅出node.js";
var buf = new Buffer(str, 'utf-8');
console.log(buf);
// => <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 6e 6f 



var chunks = []; var size = 0;
res.on('data', function (chunk) {
  chunks.push(chunk); size += chunk.length;
});
res.on('end', function () {
  var buf = Buffer.concat(chunks, size);
  var str = iconv.decode(buf, 'utf8');
  console.log(str);
});



Buffer.concat = function (list, length) {
  if (!Array.isArray(list)) {
    throw new Error('Usage: Buffer.concat(list, [length]')
  }
  if (list.length === 0) {
    return new Buffer(0);
  } else if (list.length === 1) {
    return list[0];
  }
  if (typeof length !== 'number') {
    length = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      length += buf.length;
    }
  }
  var buffer = new Buffer(length);
  var pos = 0;
  for (var i = 0; i < list.length; i++) {
    var buf = list[i];
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};


var http = require('http');
var helloworld = "";
for (var i = 0; i < 1024 * 10; i++) { helloworld += "a"; }
// helloworld = new Buffer(helloworld);
http.createServer(function (req, res) { res.writeHead(200); res.end(helloworld); }).listen(8001);



function runTest() {
  assert(fs.statSync(filename).size === filesize); var rs = fs.createReadStream(filename, {
    highWaterMark: size, encoding: encoding
  });

  rs.on('open', function () {
    bench.start();
  });

  var bytes = 0; rs.on('data', function (chunk) {
    bytes += chunk.length;
  });

  rs.on('end', function () {
    try { fs.unlinkSync(filename); } catch (e) { }     // MB/sec
    bench.end(bytes / (1024 * 1024));
  });
}

var net = require('net');
var server = net.createServer(function (socket) {
  // 新的连接
  socket.on('data', function (data) {
    socket.write("你好");
  });
  socket.on('end', function () {
    console.log('连接断开');
  });
  socket.write("欢迎光临《深入浅出Node.js》示例：\n");
});
server.listen(8124, function () { console.log('server bound'); });

var server = net.createServer();
server.on('connection', function (socket) {   // 新的连接
});
server.listen(8124);



var net = require('net');
var client = net.connect({ port: 8124 }, function () { //'   console.log('client connected');   client.write('world!\r\n');
});
client.on('data', function (data) {
  console.log(data.toString()); client.end();
});
client.on('end', function () { console.log('client disconnected'); });



var serialize = function (name, val, opt) {
  var pairs = [name + '=' + encode(val)]; opt = opt || {};
  if (opt.maxAge) pairs.push('Max-Age = ' + opt.maxAge);
  if (opt.domain) pairs.push('Domain=' + opt.domai);
  if (opt.path) pairs.push('Path=' + opt.path);
  if (opt.expires) pairs.push('Expires=' + opt.exp);
  if (opt.httpOnly) pairs.push('HttpOnly');
  if (opt.secure) pairs.push('Secure');
  return pairs.join('; ');
};
var handle = function (req, res) {
  if (!req.cookies.isVisit) {
    res.setHeader('Set-Cookie', serialize('isVisit', '1')); res.writeHead(200);
    res.end('欢迎第一次来到动物园');
  } else {
    res.writeHead(200); res.end('动物园再次欢迎你');
  }
};

var sessions = {}; var key = 'session_id';
var EXPIRES = 20 * 60 * 1000;

var generate = function () {
  var session = {};
  session.id = (new Date()).getTime() + Math.rando;
  session.cookie = {
    expire: (new Date()).getTime() + EXPIRES
  };
  sessions[session.id] = session; return session;
};


function getSession(req, res) {
  var id = req.cookies[key];
  if (!id) {
    req.session = generate();
  }
  else {
    var session = sessions[id];
    if (session) {
      if (session.cookie.expire > (new Date()).getTime()) {
        // 更新超时时间
        session.cookie.expire = (new Date()).getTime();
        req.session = session;
      } else {
        // 超时了，删除旧的数据，并重新生成
        delete sessions[id]; req.session = generate();
      }
    } else {
      // 如果session过期或口令不对，重新生成session
      req.session = generate();
    }
  }
  handle(req, res);
}
var writeHead = res.writeHead;
res.writeHead = function () {
  var cookies = res.getHeader('Set-Cookie');
  var session = serialize(key, req.session.id);
  cookies = Array.isArray(cookies) ? cookies.conca ;
  res.setHeader('Set-Cookie', cookies);
  return writeHead.apply(this, arguments);
};
var handle = function (req, res) {
  if (!req.session.isVisit) {
    req.session.isVisit = true;
    res.writeHead(200);
    res.end('欢迎第一次来到动物园');
  } else {
    res.writeHead(200); res.end('动物园再次欢迎你');
  }
};



var getURL = function (_url, key, value) {
  var obj = url.parse(_url, true);
  obj.query[key] = value;
  return url.format(obj);
};
function llll(req, res) {
  var redirect = function (url) {
    res.setHeader('Location', url);
    res.writeHead(302);
    res.end();
  };

  var id = req.query[key];
  if (!id) {
    var session = generate();
    redirect(getURL(req.url, key, session.id));
  } else {
    var session = sessions[id];
    if (session) {
      if (session.cookie.expire > (new Date()).getTime)
        // 更新超时时间
        session.cookie.expire = (new Date()).getTime();
      req.session = session;
      handle(req, res);
    } else {
      // 超时了，删除旧的数据，并重新生成
      delete sessions[id];
      var session = generate();
      redirect(getURL(req.url, key, session.id))
    }
  } else {
    // 如果session过期或口令不对，重新生成session
    var session = generate();
    redirect(getURL(req.url, key, session.id));
  }
}

// 将值通过私钥签名，由.分割原值和签名
var sign = function (val, secret) {
  return val + '.' + crypto
    .createHmac('sha256', secret)
    .update(val)
    .digest('base64')
    .replace(/\=+$/, '');
};




var handle = function (req, res) {
  fs.stat(filename, function (err, stat) {
    var lastModified = stat.mtime.toUTCString();
    if (lastModified === req.headers['if-modifiedsince']) {
      res.writeHead(304, "Not Modified");
      res.end();
    }
    else {
      fs.readFile(filename, function (err, file) {
        var lastModified = stat.mtime.toUTCString();
        res.setHeader("Last-Modified", lastModified);
        res.writeHead(200, "Ok");
        res.end(file);
      });
    }
  });
};


var getHash = function (str) {
  var shasum = crypto.createHash('sha1');
  return shasum.update(str).digest('base64');
};
var handle = function (req, res) {
  fs.readFile(filename, function (err, file) {
    var hash = getHash(file);
    var noneMatch = req.headers['if-none-match'];
    if (hash === noneMatch) {
      res.writeHead(304, "Not Modified");
      res.end();
    } else {
      res.setHeader("ETag", hash);
      res.writeHead(200, "Ok");
      res.end(file);
    }
  });
};
// expires
var handle = function (req, res) {
  fs.readFile(filename, function (err, file) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 10 * 365 * 24);
    res.setHeader("Expires", expires.toUTCString())
    res.writeHead(200, "Ok");
    res.end(file);
  });
};
// Cache-Control
var handle = function (req, res) {
  fs.readFile(filename, function (err, file) {
    res.setHeader("Cache-Control", "max-age=" + 10 * 365 * 24 * 60 * 60 * 1000);
    res.writeHead(200, "Ok");
    res.end(file);
  });
};



function (req, res) {
  var auth = req.headers['authorization'] || ''; var parts = auth.split(' '); var method = parts[0] || '';
  // Basic   var encoded = parts[1] || ''; // dXNlcjpwYXNz   var decoded = new Buffer(encoded, 'base64').toString('8').split(":");
  var user = decoded[0]; // user   var pass = decoded[1]; // pass
  if (!checkUser(user, pass)) {
    res.setHeader('WWW-Authenticate', 'Basic realm = "Secure Area"');
    res.writeHead(401);
    res.end();
  } else {
    handle(req, res);
  }
}

function pppp(req, res) {
  if (hasBody(req)) {
    var buffers = [];
    req.on('data', function (chunk) {
      buffers.push(chunk);
    });
    req.on('end', function () {
      req.rawBody = Buffer.concat(buffers).toString();
      handle(req, res);
    });
  } else {
    handle(req, res);
  }
}

var handle = function (req, res) {
  if (mime(req) === 'application/json') {
    try {
      req.body = JSON.parse(req.rawBody);
    } catch (e) {
      // 异常内容，响应Bad request       res.writeHead(400);       res.end('Invalid JSON');       return;
    }
  }
  todo(req, res);
};

var xml2js = require('xml2js');

var handle = function (req, res) {
  if (mime(req) === 'application/xml') {
    xml2js.parseString(req.rawBody, function (err,
      if (err) {
      // 异常内容，响应Bad request         res.writeHead(400);         res.end('Invalid XML');         return;       }
      req.body = xml; todo(req, res);
    });
  }
};



function (req, res) {
  if (hasBody(req)) {
    var done = function () {
      handle(req, res);
    };
    if (mime(req) === 'application/json') {
      parseJSON(req, done);
    } else if (mime(req) === 'application/xml') {
      parseXML(req, done);
    } else if (mime(req) === 'multipart/form-data') {
      parseMultipart(req, done);
    }
  } else {
    handle(req, res);
  }
}

var formidable = require('formidable');
function opopop(req, res) {
  if (hasBody(req)) {
    if (mime(req) === 'multipart/form-data') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        req.body = fields;
        req.files = files;
        handle(req, res);
      });
    }
  } else {
    handle(req, res);
  }
}


function (req, res) {
  var pathname = url.parse(req.url).pathname;
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    if (pathname === route[0]) {
      var action = route[1];
      action(req, res);
      return;
    }
  }
  // 处理404请求
  handle404(req, res);
}
var pathRegexp = function (path) {
  var keys = [];
  path = path
    .concat(strict ? '' : '/?')
    .replace(/\/\(/g, '(?:/')
    .replace(/(\/)?(\.)?:(\w+)(?:(\(.*? \)))?(\?)?(\*)?/g, function (_, slash, format, key, capoptional, star) {
      // 将匹配到的键值保存起来
      keys.push(key);
      slash = slash || '';
      return ''
        + (optional ? '' : slash) + '(?:'
        + (optional ? slash : '')
        + (format || '') + (capture || (form
          + (optional || '')
          + (star ? '(/*)?' : '')
    })
    .replace(/([\/.])/g, '\\$1')
    .replace(/\*/g, '(.*)');7

  return {
    keys: keys, regexp: new RegExp('^' + path + '$')
  };
}

function (req, res) {
  var pathname = url.parse(req.url).pathname;
  var paths = pathname.split('/');
  var controller = paths[1] || 'index';
  var action = paths[2] || 'index';
  var args = paths.slice(3);
  var module;
  try {
    // require的缓存机制使得只有第一次是阻塞的
    module = require('./controllers/' + controller)
  } catch (ex) {
    handle500(req, res); return;
  }
  var method = module[action]
  if (method) {
    method.apply(null, [req, res].concat(args));
  } else {
    handle500(req, res);
  }
}


var routes = { 'all': [] }; var app = {}; app.use = function (path, action) {
  routes.all.push([pathRegexp(path), action]);
};
['get', 'put', 'delete', 'post'].forEach(function (
  routers[method] = [];
app[method] = function (path, action) {
  routes[method].push([pathRegexp(path), action]
  )
};


var match = function (pathname, routes) {
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i];
    // 正则匹配
    var reg = route[0].regexp; var keys = route[0].keys; var matched = reg.exec(pathname); if (matched) {
      // 抽取具体值
      var params = {}; for (var i = 0, l = keys.length; i < l; i++)
        var value = matched[i + 1]; if (value) {
          params[keys[i]] = value;
        }
    }
    req.params = params;

    var action = route[1]; action(req, res); return true;
  }
}
return false;
};



function (req, res) {
  var pathname = url.parse(req.url).pathname;
  // 将请求方法变为小写
  var method = req.method.toLowerCase();
  if (routes.hasOwnPerperty(method)) {
    // 根据请求方法分发
    if (match(pathname, routes[method])) {
      return;
    } else {
      // 如果路径没有匹配成功，尝试让all()来处理
      if (match(pathname, routes.all)) {
        return;
      }
    }
  } else {
    // 直接让all()来处理
    if (match(pathname, routes.all)) {
      return;
    }
  }
  // 处理404请求
  handle404(req, res);
}

app.use = function (path) {
  var handle = {
    // 第一个参数作为路径
    path: pathRegexp(path),
    // 其他的都是处理单元
    stack: Array.prototype.slice.call(arguments, 1)
  };
  routes.all.push(handle);
};
var handle = function (req, res, stack) {
  var next = function () {
    // 从stack数组中取出中间件并执行
    var middleware = stack.shift(); if (middleware) {
      // 传入next()函数自身，使中间件能够执行结束后递归
      middleware(req, res, next);
    }
  };
  // 启动执行
  next();
};

app.use = function (path) {
  var handle; if (typeof path === 'string') {
    handle = {
      // 第一个参数作为路径
      path: pathRegexp(path),
      // 其他的都是处理单元
      stack: Array.prototype.slice.call(arguments, 1)
    };
  } else {
    handle = {
      // 第一个参数作为路径
      path: pathRegexp('/'),
      // 其他的都是处理单元
      stack: Array.prototype.slice.call(arguments, 0)
    };
  }
  routes.all.push(handle);
};


var handle = function (req, res, stack) {
  var next = function (err) {
    if (err) {
      return handle500(err, req, res, stack);
    }
    // 从stack数组中取出中间件并执行
    var middleware = stack.shift(); if (middleware) {
      // 传入next()函数自身，使中间件能够执行结束后递归       try {         middleware(req, res, next);
    } catch (ex) {
      next(err);
    }
  }
};
// 启动执行   next(); };

var handle500 = function (err, req, res, stack) {
  // 选取异常处理中间件
  stack = stack.filter(function (middleware) {
    return middleware.length === 4;
  });
  var next = function () {
    // 从stack数组中取出中间件并执行
    var middleware = stack.shift(); if (middleware) {
      // 传递异常对象
      middleware(err, req, res, next);
    }
  };
  // 启动执行
  next();
};


res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('<html><body>Hello 	World</body></html>\n');
// 或者
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<html><body>Hello 	World</body> </html>\n');



res.sendfile = function (filepath) {
  fs.stat(filepath, function (err, stat) {
    var stream = fs.createReadStream(filepath);
    // 设置内容
    res.setHeader('Content-Type', mime.lookup(filepath));
    // 设置长度
    res.setHeader('Content-Length', stat.size);
    // 设置为附件
    res.setHeader('Content-Disposition' + 'attachment; filename="' + path.basen)
    res.writeHead(200); stream.pipe(res);
  });
};
res.json = function (json) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(json));
};

res.render = function (view, data) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  // 实际渲染
  var html = render(view, data);
  res.end(html);
};

// var render = function (str, data) {
//   // 模板技术呢，就是替换特殊标签的技术
//   var tpl = str.replace(/<%=([\s\S] +?) %> /g, function (match, code) {
//     return "' + obj." + code + "+ '";
//   });
//   tpl = "var tpl = '" + tpl + "'\nreturn tpl;";
//   var complied = new Function('obj', tpl);
//   return complied(data);
// };
// var tpl = 'Hello <%=username%>.';
// console.log(render(tpl, { username: 'Jackson Tian' }))


var complie = function (str) {
  var tpl = str.replace(/<%=([\s\S]+?)%>/g, function (match, code) {
    return "' + obj." + code + "+ '";
  });

  tpl = "var tpl = '" + tpl + "'\nreturn tpl ";
  return new Function('obj, escape', tpl);
};

var render = function (complie, data) {
  return complie(data);
};



var complie = function (str, data) {
  // 模板技术呢，就是替换特殊标签的技术  	
  var tpl = str.replace(/<%= ([\s\S]+?)%>/g, function (match, code) {
    return "' + " + code + "+ '";
  });

  tpl = "tpl = '" + tpl + "'";
  tpl = 'var tpl = "";\nwith (obj) {' + tpl + '}\n   return new Function('obj', tpl);
};

var escape = function (html) {
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;'); // IE下不支持
};
var render = function (str, data) {
  var tpl = str.replace(/\n/g, '\\n') // 将换行符替换
    .replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 转义     return "' + escape(" + code + ") + '";
    }).replace(/<%-([\s\S]+?)%>/g, function (match, code) {
      // 正常输出
      return "' + " + code + "+ '";
    });
  tpl = "tpl = '" + tpl + "'";
  tpl = 'var tpl = "";\nwith (obj) {' + tpl
  // 加上escape()函数   return new Function('obj', 'escape', tpl);
};


var complie = function (str) {
  var tpl = str.replace(/\n/g, '\\n') // 将换行符替换
    .replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 转义     return "' + escape(" + code + ") + '";
    }).replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 正常输出
      return "' + " + code + "+ '";
    }).replace(/<%([\s\S]+?)%>/g, function (match, code) {
      // 可执行代码
      return "';\n" + code + "\ntpl += '";
    }).replace(/\'\n/g, '\'')
    .replace(/\n\'/gm, '\'');

  tpl = "tpl = '" + tpl + "';";
  // 转换空行
  tpl = tpl.replace(/''/g, '\'\\n\'');
  tpl = 'var tpl = "";\nwith (obj || {}) {\n' + tp
  return new Function('obj', 'escape', tpl);
};

var tpl = [
  '<% for (var i = 0; i < items.length; i++) { %>'
  '<%var item = items[i];%>',
  '<p><%= i+1 %>、<%=item.name%></p>',
  '<% } %>'].join('\n');
render(complie(tpl), { items: [{ name: 'Jackson' }, { ' 灵'}] });


var cache = {}; var VIEW_FOLDER = '/path/to/wwwroot/views';
res.render = function (viewname, data) {
  if (!cache[viewname]) {
    var text; try {
      text = fs.readFileSync(path.join(VIEW_FOLDER))
    } catch (e) {
      res.writeHead(500, {
        'Content-Type': 'text / html'
      }); res.end('模板文件错误');
      return;
    }
    cache[viewname] = complie(text);
  }
  var complied = cache[viewname];
  res.writeHead(200, {
    'Content-Type': 'text / html'
  }); var html = complied(data); res.end(html);
};
var complie = function (str) {
  // 预解析子模板
  str = preComplie(str);
  var tpl = str.replace(/\n/g, '\\n') // 将换行符替换
    .replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 转义
      return "' + escape(" + code + ") + '";
    }).replace(/<%=([\s\S]+?)%>/g, function (match, code) {
      // 正常输出
      return "' + " + code + "+ '";
    }).replace(/<%([\s\S]+?)%>/g, function (match, code) {
      // 可执行代码
      return "';\n" + code + "\ntpl += '";
    }).replace(/\'\n/g, '\'')
    .replace(/\n\'/gm, '\'');

  tpl = "tpl = '" + tpl + "';";
  // 转换空行
  tpl = tpl.replace(/''/g, '\'\\n\''); tpl = 'var tpl = "";\nwith (obj || {}) {\n' + tp   return new Function('obj', 'escape', tpl);
};


res.render = function (viewname, data) {
  var layout = data.layout;
  if (layout) {
    if (!cache[layout]) {
      try {
        cache[layout] = fs.readFileSync(path.join())
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'text/html' }); res.end('布局文件错误');
        return;
      }
    }
  }
  var layoutContent = cache[layout] || '<%body%>';

  var replaced;
  try {
    replaced = renderLayout(layoutContent, viewnam)
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' }); res.end('模板文件错误');
    return;
  }
  // 将模板和布局文件名做key缓存
  var key = viewname + ':' + (layout || '');
  if (!cache[key]) {
    // 编译模板
    cache[key] = cache(replaced);
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = cache[key](data);
  res.end(html);
};

app.get('/profile', function (req, res) {
  db.getData('sql1', function (err, users) {
    db.getData('sql2', function (err, articles) {
      res.render('user', {
        layout: 'layout.html', users: users, articles: articles
      });
    });
  });
});
