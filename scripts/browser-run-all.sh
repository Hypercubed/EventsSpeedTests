
./scripts/browser-run-one.sh "open" | tee ./results/chrome-v50.md
./scripts/browser-run-one.sh "open -a /Applications/Firefox.app" | tee ./results/firefox-v46.md
./scripts/browser-run-one.sh "open -a Safari" | tee ./results/safari-v9.md
