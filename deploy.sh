#!/bin/bash

#  =================================
#   NodeJS Build Script - Devnup CI
#  =================================
#
#  Required custom ENV:
#  - $HEROKU_MASTER_APP
#
#  Optional custom ENV:
#  - $HEROKU_DEV_APP
#  - $HEROKU_TEST_APP
#
#  Required CI ENV:
#  - $CI_BUILD_REF
#  - $CI_BUILD_REF_NAME


echo "Branch: $CI_BUILD_REF_NAME";
echo "Installing dependencies using NPM..."
npm install;
npm test;

git config advice.objectNameWarning false;
echo "Adding heroku to git remote hosts: $HEROKU_URL";
if [-z "$HEROKU_DEV_APP"] && [ $CI_BUILD_REF_NAME = "dev" ]; then
  heroku git:remote --app="$HEROKU_DEV_APP" --remote="heroku";
elif [-z "$HEROKU_TEST_APP"] && [ $CI_BUILD_REF_NAME = "test" ]; then
  heroku git:remote --app="$HEROKU_DEV_APP" --remote="heroku";
elif [-z "$HEROKU_MASTER_APP"] && [ $CI_BUILD_REF_NAME = "master" ]; then
  heroku git:remote --app="$HEROKU_MASTER_APP" --remote="heroku";
else
  echo "Remote deploy bypassed: no Heroku app specified"
  exit 0;
fi

echo "Pushing changes using Git...";
git checkout -b "$CI_BUILD_REF";
git push heroku "$CI_BUILD_REF:master" -f;