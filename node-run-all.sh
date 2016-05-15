node ./bench/utils/header.js

echo ""
matcha ./bench/emit.js $@
sleep 10

echo ""
matcha ./bench/emit-one.js $@
sleep 10

echo ""
matcha ./bench/init.js $@
sleep 10

echo ""
matcha ./bench/add-remove.js $@
sleep 10

echo ""
matcha ./bench/emit-context.js $@
sleep 10

echo ""
matcha ./bench/emit-bound.js $@
sleep 10

echo ""
matcha ./bench/emit-many.js $@
sleep 10

echo ""
matcha ./bench/emit-large.js $@
sleep 10

echo ""
matcha ./bench/emit-arrays.js $@
sleep 10

echo ""
matcha ./bench/emit-objects.js $@
sleep 10
