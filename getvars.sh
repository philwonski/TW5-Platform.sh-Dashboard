#!/bin/dash
# create variables tiddler file
cat > /wiki4/tiddlers/platforme.tid << EOF
title: platforme
tag: post_deploy
today: $(date +%B%e,\ %Y)
text: $(PLATFORM_VARIABLES)
EOF