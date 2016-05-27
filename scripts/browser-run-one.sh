
# Use a for loop to run each test in a seperate process
# blue-tape is used, rather than node-tap, to ensure the test end cleanly

for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
     browserify ./scripts/platform.js "$file" --im | testling -x "$1"
     sleep 10
  fi
done
