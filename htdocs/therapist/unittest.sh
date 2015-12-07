#!/bin/bash

name=$(pwgen -n1)
url=$(pwgen -n1)
phone=$(pwgen -n1)

curl --data "name=$name&url=$url&phone=&phone" basil.andrewtolvstad.com/therapist/submit.php

if [ -n "$(grep "{\"name\":\"$name\",\"url\":\"$url\",\"phone\":\"$phone\"}]" therapist.json)" ]; then
    echo "Test Failed: failed to insert."
else
    echo "Test Succeded."
fi
