set -e



rm -rf ../docs



mkdir ../docs

npx vue-cli-service build --dest docs/ --modern --report

cp -r docs/ ../docs

rm -r docs/
