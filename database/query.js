const query = `SELECT 
DATE, 
COUNT( IF(  \`event\` =  'REGISTRATION', 1, NULL ) )  \`REGISTRATION_COUNT\` , 
COUNT( IF(  \`event\` =  'LINK_VISITOR', 1, NULL ) ) \`LINK_VISITOR_COUNT\` , 
COUNT( IF(  \`event\` =  'PAYMENT', 1, NULL ) )  \`PAYEMENT_COUNT\` , 
SUM( IF(  \`event\` =  'PAYMENT', 1, NULL ) ) \`PAYEMENT_VALUE\` , 
COUNT( IF(  \`event\` =  'DEPOSIT', 1, NULL ) )  \`DEPOSIT_COUNT\` , 
SUM( IF(  \`event\` =  'DEPOSIT', event_value, NULL ) ) \`DEPOSIT_VALUE\` 
FROM stats
WHERE date >= $1 and date <= $2
GROUP BY DATE`;

module.exports = query;
