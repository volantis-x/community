// 全站打包上传 npm，sw 并发请求 cdn
const prefix = 'volantis-community';
const cacheSuffixVersion = '00000018-::cacheSuffixVersion::';
const CACHE_NAME = prefix + '-v' + cacheSuffixVersion;
const PreCachlist = [
  "/css/style.css",
  "/js/app.js",
  "/js/search/hexo.js",
];
let NPMMirror = true;
const NPMPackage = "@mhg/volantis-community";
let NPMPackageVersion = "1.0.1674055760561";
let debug = true;
// location.hostname == 'localhost' && (debug = true) && (NPMMirror = false);
const handleFetch = async (event) => {
  const url = event.request.url;
  if (/nocache/.test(url)) {
    return NetworkOnly(event)
  } else if (/@latest/.test(url)) {
    return CacheFirst(event)
  } else if (/cdnjs\.cloudflare\.com/.test(url)) {
    return CacheAlways(event)
  } else if (/music\.126\.net/.test(url)) {
    return CacheAlways(event)
  } else if (/qqmusic\.qq\.com/.test(url)) {
    return CacheAlways(event)
  } else if (/jsdelivr\.net/.test(url)) {
    return CacheAlways(event)
  } else if (/npm\.elemecdn\.com/.test(url)) {
    return CacheAlways(event)
  } else if (/unpkg\.com/.test(url)) {
    return CacheAlways(event)
  } else if (/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)$/.test(url)) {
    return CacheAlways(event)
  } else if (/.*\.(css|js)$/.test(url)) {
    return CacheAlways(event)
  } else {
    return CacheFirst(event)
  }
}
const cdn = {
  gh: {
    jsdelivr: 'https://cdn.jsdelivr.net/gh',
    fastly: 'https://fastly.jsdelivr.net/gh',
    gcore: 'https://gcore.jsdelivr.net/gh',
    testingcf: 'https://testingcf.jsdelivr.net/gh',
    test1: 'https://test1.jsdelivr.net/gh',
  },
  combine: {
    jsdelivr: 'https://cdn.jsdelivr.net/combine',
    fastly: 'https://fastly.jsdelivr.net/combine',
    gcore: 'https://gcore.jsdelivr.net/combine',
    testingcf: 'https://testingcf.jsdelivr.net/combine',
    test1: 'https://test1.jsdelivr.net/combine',
  },
  npm: {
    jsdelivr: 'https://cdn.jsdelivr.net/npm',
    fastly: 'https://fastly.jsdelivr.net/npm',
    gcore: 'https://gcore.jsdelivr.net/npm',
    testingcf: 'https://testingcf.jsdelivr.net/npm',
    test1: 'https://test1.jsdelivr.net/npm',
    unpkg: 'https://unpkg.com',
    eleme: 'https://npm.elemecdn.com',
  },
  cdnjs: {
    cdnjs: 'https://cdnjs.cloudflare.com/ajax/libs',
    baomitu: 'https://lib.baomitu.com',
    bootcdn: 'https://cdn.bootcdn.net/ajax/libs',
    bytedance: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M',
    sustech: 'https://mirrors.sustech.edu.cn/cdnjs/ajax/libs',
  }
}
const cdn_match_list = []
for (const type in cdn) {
  for (const key in cdn[type]) {
    cdn_match_list.push({ type: type, key: cdn[type][key] })
  }
}
const _console = console;
const color = {
  black: '#000000',
  red: '#FF0000',
  green: '#008000',
  yellow: '#FFFF00',
  blue: '#0000FF',
  magenta: '#FF00FF',
  cyan: '#00FFFF',
  white: '#FFFFFF',
};
const add = (...arr) => {
  let fi = [
    []
  ];
  for (let key = 0; key < arr.length; key++) {
    const [first, ...other] = arr[key];
    fi[0] += first;
    fi = fi.concat(other);
  }
  return fi;
};
const createlog = (util) => (...args) => {
  // const fun = _console[util] ? _console[util] : _console.log;
  const fun = util == "error" ? _console[util] : _console.log;
  fun.apply(void 0, args);
};
const creategroup = (util) => (...args) => {
  const fun = _console.groupCollapsed;
  fun.apply(void 0, args);
};
const colorUtils = {
  bold: (str) => {
    if (typeof str === 'string' || typeof str === 'number') {
      return `${str};font-weight: bold;`;
    }
    for (let key = 1; key < str.length; key++) {
      str[key] += `;font-weight: bold;`;
    }
    return str;
  }
};
const colorHash = {
  log: 'black',
  wait: 'cyan',
  error: 'red',
  warn: 'yellow',
  ready: 'green',
  info: 'blue',
  event: 'magenta',
};
const createChalk = (name) => (...str) => {
  if (typeof str[0] === 'object') {
    createlog(name)(...add(colorUtils.bold(colorUtils[colorHash[name]](`[${firstToUpperCase(name)}] `)), ...str));
    return;
  }
  let strArr = str;
  if (typeof str === 'string' || typeof str === 'number') {
    strArr = colorUtils[colorHash[name]](str);
  }
  createlog(name)(...add(colorUtils.bold(colorUtils[colorHash[name]](`[${firstToUpperCase(name)}] `)), strArr));
};
const createChalkBg = (name) => (...str) => {
  if (typeof str[0] === 'object') {
    createlog(name)(...add(colorUtils.bold(colorUtils[`bg${firstToUpperCase(colorHash[name])}`](`[${firstToUpperCase(name)}] `)), ...str));
    return;
  }
  let strArr = str;
  if (typeof str === 'string' || typeof str === 'number') {
    strArr = colorUtils[colorHash[name]](str);
  }
  createlog(name)(...add(colorUtils.bold(colorUtils[`bg${firstToUpperCase(colorHash[name])}`](`[${firstToUpperCase(name)}] `)), strArr));
};
const createChalkGroup = (name) => (...str) => {
  if (typeof str[0] === 'object') {
    creategroup(name)(...add(colorUtils.bold(colorUtils[colorHash[name]](`[${firstToUpperCase(name)}] `)), ...str));
    return;
  }
  let strArr = str;
  if (typeof str === 'string' || typeof str === 'number') {
    strArr = colorUtils[colorHash[name]](str);
  }
  creategroup(name)(...add(colorUtils.bold(colorUtils[colorHash[name]](`[${firstToUpperCase(name)}] `)), strArr));
};
const chalk = {
  group: {
    end: _console.groupEnd
  },
  bg: {}
};
Object.keys(colorHash).forEach(key => {
  chalk[key] = createChalk(key);
  chalk.group[key] = createChalkGroup(key);
  chalk.bg[key] = createChalkBg(key);
});
const firstToUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
Object.keys(color).forEach(key => {
  colorUtils[key] = (str) => {
    if (typeof str === 'string' || typeof str === 'number') {
      return [`%c${str}`, `color:${color[key]}`];
    }
    for (let i = 1; i < str.length; i++) {
      str[i] += `;color:${color[key]}`;
    }
    return str;
  };
  colorUtils[`bg${firstToUpperCase(key)}`] = (str) => {
    if (typeof str === 'string' || typeof str === 'number') {
      return [`%c${str}`, `padding: 2px 4px; border-radius: 3px; color: ${key === 'white' ? '#000' : '#fff'}; font-weight: bold; background:${color[key]};`];
    }
    for (let i = 1; i < str.length; i++) {
      str[i] += `;padding: 2px 4px; border-radius: 3px; font-weight: bold; background:${color[key]};`;
    }
    return str;
  };
});
self.logger = {
  add,
  ...chalk,
  ...colorUtils,
};

if (!debug) {
  logger = {
    log: () => { },
    wait: () => { },
    error: () => { },
    warn: () => { },
    ready: () => { },
    info: () => { },
    event: () => { },
    group: {
      log: () => { },
      wait: () => { },
      error: () => { },
      warn: () => { },
      ready: () => { },
      info: () => { },
      event: () => { },
      end: () => { },
    },
    bg: {
      log: () => { },
      wait: () => { },
      error: () => { },
      warn: () => { },
      ready: () => { },
      info: () => { },
      event: () => { },
    }
  };
  console.log = () => { };
}

const generate_uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
self.db = {
  read: (key, config) => {
    if (!config) { config = { type: "text" } }
    return new Promise((resolve, reject) => {
      caches.open(CACHE_NAME).then(cache => {
        cache.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
          if (!res) resolve(null)
          res.text().then(text => resolve(text))
        }).catch(() => {
          resolve(null)
        })
      })
    })
  },
  write: (key, value) => {
    return new Promise((resolve, reject) => {
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
        resolve()
      }).catch(() => {
        reject()
      })
    })
  }
}
const compareVersion = (a, b) => {
  let v1 = a.split('.');
  let v2 = b.split('.');
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return a;
    } else if (num1 < num2) {
      return b;
    }
  }
  return a;
}

const mirrors = [
  `https://registry.npmjs.org/${NPMPackage}/latest`,
  `https://registry.npmmirror.com/${NPMPackage}/latest`,
  `https://mirrors.cloud.tencent.com/npm/${NPMPackage}/latest`
]
const getLocalVersion = async () => {
  NPMPackageVersion = await db.read('blog_version') || NPMPackageVersion
  logger.bg.info(`Local Version: ${NPMPackage}@${NPMPackageVersion}`)
}
let mirror_time = 0;
const setNewestVersion = async () => {
  if (!NPMMirror) {
    return
  }
  let f = null;
  if (!(mirror_time % (mirrors.length + 1))) {
    f = FetchEngine(mirrors);
  } else {
    f = fetch(mirrors[(mirror_time % (mirrors.length + 1)) - 1]);
  }
  mirror_time++;
  return f
    .then(res => res.json())
    .then(async res => {
      if (!res.version) throw ('No Version Found!')
      NPMPackageVersion = compareVersion(res.version, await db.read('blog_version') || NPMPackageVersion)
      logger.bg.ready(`${NPMPackage}@${NPMPackageVersion}`)
      await db.write('blog_version', NPMPackageVersion)
    })
    .catch(error => {
      logger.error('[Set Newest Version] ' + (error.stack || error))
    })
}
setInterval(async () => {
  await setNewestVersion()
}, 60 * 1000);
setTimeout(async () => {
  await setNewestVersion()
}, 5000)
const installFunction = async () => {
  await getLocalVersion();
  return caches.open(CACHE_NAME + "-precache")
    .then(async function (cache) {
      if (!await db.read('uuid')) {
        await db.write('uuid', generate_uuid())
      }
      if (PreCachlist.length) {
        logger.group.event(`Precaching ${PreCachlist.length} files.`);
        let index = 0;
        PreCachlist.forEach(function (url) {
          cache.match(new Request(url)).then(function (response) {
            if (response) {
              logger.ready(`Precaching ${url}`);
            } else {
              logger.wait(`Precaching ${url}`);
              cache.add(new Request(url));
            }
            index++;
            if (index === PreCachlist.length) {
              logger.ready(`Precached ${PreCachlist.length} files.`);
              logger.group.end();
            }
          })
        })
      }
    }).catch((error) => {
      logger.error('[install] ' + (error.stack || error));
    })
}
self.addEventListener('install', async function (event) {
  logger.bg.event("service worker install event listening");
  try {
    self.skipWaiting();
    event.waitUntil(installFunction());
    logger.bg.ready('service worker install sucess!');
  } catch (error) {
    logger.error('[install] ' + (error.stack || error));
  }
});
self.addEventListener('activate', async event => {
  logger.bg.event("service worker activate event listening");
  try {
    event.waitUntil(
      caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => {
          if (!key.includes(cacheSuffixVersion)) {
            caches.delete(key);
            logger.bg.ready('Deleted Outdated Cache: ' + key);
          }
        }));
      }).catch((error) => {
        logger.error('[activate] ' + (error.stack || error));
      })
    );
    await self.clients.claim()
    logger.bg.ready('service worker activate sucess!');
  } catch (error) {
    logger.error('[activate] ' + (error.stack || error));
  }
})
self.addEventListener('fetch', async event => {
  event.respondWith(
    handleFetch(event).catch((error) => {
      logger.error('[fetch] ' + event.request.url + '\n[error] ' + (error.stack || error));
    })
  )
});


const NetworkOnly = async (event) => {
  logger.group.info('NetworkOnly: ' + new URL(event.request.url).pathname);
  logger.wait('service worker fetch: ' + event.request.url)
  logger.group.end();
  return fetch(event.request)
}
const CacheFirst = async (event) => {
  return caches.match(event.request).then(function (resp) {
    logger.group.info('CacheFirst: ' + new URL(event.request.url).pathname);
    logger.wait('service worker fetch: ' + event.request.url)
    if (resp) {
      logger.group.ready(`Cache Hit`);
      console.log(resp)
      logger.group.end();
      logger.group.end();
      event.waitUntil(CacheRuntime(event.request))
      return resp;
    } else {
      logger.warn(`Cache Miss`);
      logger.group.end();
      return CacheRuntime(event.request)
    }
  })
}
const CacheAlways = async (event) => {
  return caches.match(event.request).then(function (resp) {
    logger.group.info('CacheAlways: ' + new URL(event.request.url).pathname);
    logger.wait('service worker fetch: ' + event.request.url)
    if (resp) {
      logger.group.ready(`Cache Hit`);
      console.log(resp)
      logger.group.end();
      logger.group.end();
      return resp;
    } else {
      logger.warn(`Cache Miss`);
      logger.group.end();
      return CacheRuntime(event.request)
    }
  })
}

const matchCache = async (event) => {
  return caches.match(event.request).then(function (resp) {
    logger.group.info('service worker fetch: ' + event.request.url)
    if (resp) {
      logger.group.ready(`Cache Hit`);
      console.log(resp)
      logger.group.end();
      logger.group.end();
      return resp;
    } else {
      logger.warn(`Cache Miss`);
      logger.group.end();
      return CacheRuntime(event.request)
    }
  })
}
async function CacheRuntime(request) {
  const url = new URL(request.url);
  let response = await matchCDN(request);
  if (!response) {
    response = await fetch(request).catch(() => null)
  }
  logger.group.event(`Cache Runtime ${url.pathname}`);
  logger.wait(`Caching url: ${request.url}`);
  console.log(response);

  if (request.method === "GET" && (url.protocol == "https:")) {
    const cache = await caches.open(CACHE_NAME + "-runtime");
    cache.put(request, response.clone()).catch(error => {
      logger.error('[Cache Runtime] ' + (error.stack || error));
      if (error.name === 'QuotaExceededError') {
        caches.delete(CACHE_NAME + "-runtime");
        logger.ready("deleted cache")
      }
    })
    logger.ready(`Cached url: ${request.url}`);
  } else {
    logger.warn(`Not Cached url: ${request.url}`);
  }
  logger.group.end();
  return response;
}

const matchCDN = async (req) => {
  const nav = navigator
  const { saveData, effectiveType } = nav.connection || nav.mozConnection || nav.webkitConnection || {}
  if (saveData || /2g/.test(effectiveType)) {
    logger.warn("Slow Network: Transparent Proxy");
    return fetch(req);
  }
  const urls = []
  let urlObj = new URL(req.url)
  let pathType = urlObj.pathname.split('/')[1]
  let pathTestRes = "";

  if (NPMMirror && new RegExp(location.origin).test(req.url)) {
    logger.group.ready(`Match NPM Mirror: ` + req.url);
    for (const key in cdn.npm) {
      let url = cdn.npm[key] + "/" + NPMPackage + "@" + NPMPackageVersion + req.url.replace(location.origin, '')
      url = fullPath(fullPath(url))
      console.log(url);
      urls.push(url)
    }
    logger.group.end()
  }
  if (!urls.length) {
    for (const item of cdn_match_list) {
      if (new RegExp(item.key).test(req.url)) {
        pathType = item.type
        pathTestRes = new RegExp(item.key).exec(req.url)[0]
        break;
      }
    }
    for (const type in cdn) {
      if (type === pathType) {
        logger.group.ready(`Match CDN ${pathType}: ` + req.url);
        for (const key in cdn[type]) {
          const url = cdn[type][key] + req.url.replace(pathTestRes, '')
          console.log(url);
          urls.push(url)
        }
        logger.group.end()
      }
    }
  }

  let res;
  if (urls.length)
    res = FetchEngine(urls)
  else
    res = fetch(req)
  if (res && NPMMirror && new RegExp(location.origin).test(req.url)) {
    const ext = fullPath(fullPath(req.url)).split('.').pop()
    const contentType = getContentType(ext)
    res = res
      .then(res => res.arrayBuffer())
      .then(buffer => new Response(buffer, {
        headers: {
          "Content-Type": contentType
        }
      }))
      .catch(() => null)
  }
  return res
}

const fullPath = (url) => {
  url = url.split('?')[0].split('#')[0]
  if (url.endsWith('/')) {
    url += 'index.html'
  } else {
    const list = url.split('/')
    const last = list[list.length - 1]
    if (last.indexOf('.') === -1) {
      url += '.html'
    }
  }
  return url
}
async function progress(res) {
  return new Response(await res.arrayBuffer(), {
    status: res.status,
    headers: res.headers
  })
}

function createPromiseAny() {
  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      promises = Array.isArray(promises) ? promises : []
      let len = promises.length
      let errs = []
      if (len === 0) return reject(new AggregateError('All promises were rejected'))
      promises.forEach((p) => {
        if (p instanceof Promise) {
          p.then(
            (res) => resolve(res),
            (err) => {
              len--
              errs.push(err)
              if (len === 0) reject(new AggregateError(errs))
            }
          )
        } else {
          reject(p)
        }
      })
    })
  }
}

function fetchAny(reqs) {
  const controller = new AbortController()

  return reqs.map(req => {
    return new Promise((resolve, reject) => {
      fetch(req, {
        signal: controller.signal
      })
        .then(progress)
        .then(res => {
          controller.abort()
          if (res.status !== 200)
            reject(null)
          else
            resolve(res)
        })
        .catch(() => reject(null))
    })
  })
}

function fetchParallel(reqs) {
  const abortEvent = new Event("abortOtherInstance")
  const eventTarget = new EventTarget();

  return reqs.map(async req => {
    const controller = new AbortController();
    let tagged = false;
    eventTarget.addEventListener(abortEvent.type, () => {
      if (!tagged) controller.abort();
    })
    return new Promise((resolve, reject) => {
      fetch(req, {
        signal: controller.signal,
      }).then(res => {
        tagged = true;
        eventTarget.dispatchEvent(abortEvent)
        if (res.status !== 200)
          reject(null)
        else
          resolve(res)
      }).catch(() => reject(null))
    })
  });
}

const FetchEngine = (reqs) => {
  if (!Promise.any) createPromiseAny();
  return Promise.any(fetchParallel(reqs)).then(res => res)
    .catch((e) => {
      if (e == "AggregateError: All promises were rejected") {
        return Promise.any(fetchAny(reqs))
          .then((res) => res)
          .catch(() => null);
      }
      return null;
    });
};

const getContentType = (ext) => {
  switch (ext) {
    case 'js':
      return 'text/javascript'
    case 'html':
      return 'text/html'
    case 'css':
      return 'text/css'
    case 'json':
      return 'application/json'
    case 'webp':
      return 'image/webp'
    case 'jpg':
      return 'image/jpg'
    case 'jpeg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    case 'xml':
      return 'text/xml'
    case 'xsl':
      return 'text/xml'
    case 'webmanifest':
      return 'text/webmanifest'
    case 'map':
      return 'application/json'
    case 'bcmap':
      return 'image/vnd.wap.wbmp'
    case 'wbmp':
      return 'image/vnd.wap.wbmp'
    case 'bmp':
      return 'image/bmp'
    case 'ico':
      return 'image/vnd.microsoft.icon'
    case 'tiff':
      return 'image/tiff'
    case 'tif':
      return 'image/tiff'
    case 'svg':
      return 'image/svg+xml'
    case 'svgz':
      return 'image/svg+xml'
    case 'woff':
      return 'application/font-woff'
    case 'woff2':
      return 'application/font-woff2'
    case 'ttf':
      return 'application/font-ttf'
    case 'otf':
      return 'application/font-otf'
    case 'eot':
      return 'application/vnd.ms-fontobject'
    case 'zip':
      return 'application/zip'
    case 'tar':
      return 'application/x-tar'
    case 'gz':
      return 'application/gzip'
    case 'bz2':
      return 'application/x-bzip2'
    case 'rar':
      return 'application/x-rar-compressed'
    case '7z':
      return 'application/x-7z-compressed'
    case 'doc':
      return 'application/msword'
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    case 'xls':
      return 'application/vnd.ms-excel'
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    case 'ppt':
      return 'application/vnd.ms-powerpoint'
    case 'pptx':
      return 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    case 'pdf':
      return 'application/pdf'
    case 'txt':
      return 'text/plain'
    case 'rtf':
      return 'application/rtf'
    case 'mp3':
      return 'audio/mpeg'
    case 'wav':
      return 'audio/x-wav'
    case 'ogg':
      return 'audio/ogg'
    case 'mp4':
      return 'video/mp4'
    case 'm4v':
      return 'video/x-m4v'
    case 'mov':
      return 'video/quicktime'
    case 'avi':
      return 'video/x-msvideo'
    case 'wmv':
      return 'video/x-ms-wmv'
    case 'flv':
      return 'video/x-flv'
    case 'swf':
      return 'application/x-shockwave-flash'
    case 'mpg':
      return 'video/mpeg'
    case 'mpeg':
      return 'video/mpeg'
    case 'mpe':
      return 'video/mpeg'
    case 'mpv':
      return 'video/mpeg'
    case 'm2v':
      return 'video/mpeg'
    case 'm4a':
      return 'audio/mp4'
    case 'aac':
      return 'audio/aac'
    case 'm3u':
      return 'audio/x-mpegurl'
    case 'm3u8':
      return 'application/vnd.apple.mpegurl'
    case 'pls':
      return 'audio/x-scpls'
    case 'cue':
      return 'application/x-cue'
    case 'wma':
      return 'audio/x-ms-wma'
    case 'flac':
      return 'audio/flac'
    case 'aif':
      return 'audio/x-aiff'
    case 'aiff':
      return 'audio/x-aiff'
    case 'aifc':
      return 'audio/x-aiff'
    case 'au':
      return 'audio/basic'
    case 'snd':
      return 'audio/basic'
    case 'mid':
      return 'audio/midi'
    case 'midi':
      return 'audio/midi'
    case 'kar':
      return 'audio/midi'
    default:
      return 'text/plain'
  }
}
