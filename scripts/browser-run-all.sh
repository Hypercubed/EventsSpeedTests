mkdir -p raw

npm run build

npx p-s bench.browser
mv raw/browser.tap raw/browser-chrome-v111.tap
sleep 10

npx p-s summary.browsers
