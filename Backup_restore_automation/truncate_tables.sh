#!/bin/sh
 
DATABASE=sales

mysql -Nse 'show tables' sales | \
    while read table; do mysql \
    -e "use sales;SET FOREIGN_KEY_CHECKS=0;truncate table $table;SET FOREIGN_KEY_CHECKS=1;" ;done