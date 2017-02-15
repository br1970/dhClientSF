#!/bin/bash
curl -G -v "https://slack.com/api/chat.postMessage?token=xoxp-140915763028-140837367554-140930555237-aa831d4663724efccbf2bc060a3ba6cb" \
--data-urlencode "channel=#vsts-dh-build" \
--data-urlencode "text=$1" \
--data-urlencode "username=" \
--data-urlencode "as_user=false" \
--data-urlencode "pretty=1"
