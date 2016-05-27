
# Use a for loop to run each test in a seperate process
# blue-tape is used, rather than node-tap, to ensure the test end cleanly

browserify ./scripts/platform.js --im | testling -x "$1"

for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
    sleep 10
     browserify "$file" --im | testling -x "$1"
  fi
done
