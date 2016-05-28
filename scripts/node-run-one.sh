
# Use a for loop to run each test in a seperate process
# blue-tape is used, rather than node-tap, to ensure the test end cleanly

for file in ./benchmark/*.js ; do
  if [ -e "$file" ] ; then
    sleep 5
    node "$file"
  fi
done
