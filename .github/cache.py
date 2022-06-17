import os
from random import random
import re
Precache={}

def walkFile(FilePath):
  for root, dirs, files in os.walk(FilePath):
    for f in files:
      try:
        Path=os.path.join(root, f)
        print(Path)
        if re.search(r"^app\..*\.js$",f):
          Precache["app"]=f
        elif re.search(r"^hexo\..*\.js$",f):
          Precache["search"]=f
        elif re.search(r"^style\..*\.css$",f):
          Precache["style"]=f
      except Exception as e:
        print(e)

print("==================== Precache Start ====================")
walkFile("./public/js/")
walkFile("./public/css/")
print(Precache)
f=open("./public/volantis-sw.js","rb")
fb = f.read().decode("utf8","ignore")
f.close()
fb=fb.replace("/css/style.css","/css/"+Precache["style"])
fb=fb.replace("/js/app.js","/js/"+Precache["app"])
fb=fb.replace("/js/search/hexo.js","/js/search/"+Precache["search"])
fb=fb.replace("::cacheSuffixVersion::",str(random()))
print(fb)
f=open("./public/volantis-sw.js","wb")
f.write(fb.encode("utf-8"))
f.close()
print("==================== Precache End ====================")