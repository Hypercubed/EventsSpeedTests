
node ./reporters/platform.js

for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
     node "$file"
     sleep 10
  fi
done
