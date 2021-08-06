#!/bin/bash
# create variables tiddler file
echo "line 1" >> cligreetings.txt;


hooks:
  deploy: |
    echo "title: build_greetings" >> /wiki4/tiddlers/build_greetings.tid
    echo "text: $(PLATFORM_VARIABLES)" >> /wiki4/tiddlers/build_greetings.tid