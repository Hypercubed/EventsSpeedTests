for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
     browserify ./reporters/platform.js "$file" --im | testling -x "$1"
     sleep 10
  fi
done
