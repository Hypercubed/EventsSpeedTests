
#./scripts/browser-run-one.sh "open" | tee ./raw/chrome-v50.md
#cat ./raw/chrome-v50.md | ./node_modules/.bin/tap-summary -CP > ./results/chrome-v50.md

#./scripts/browser-run-one.sh "open -a /Applications/Firefox.app" | tee ./raw/firefox-v46.md
#cat ./raw/firefox-v46.md | ./node_modules/.bin/tap-summary -CP > ./results/firefox-v46.md

./scripts/browser-run-one.sh "open -a Safari" | tee ./raw/safari-v9.md
cat ./raw/safari-v9.md | ./node_modules/.bin/tap-summary -CP > ./results/safari-v9.md
