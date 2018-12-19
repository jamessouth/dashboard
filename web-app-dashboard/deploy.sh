set -e

rm -rf ../docs

mkdir ../docs

npx vue-cli-service build --dest docs/ --modern

cp -r docs/ ../

rm -r docs/
