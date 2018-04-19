
/*var data = d3.csv(dataUrl, function(d) {
  return {
    date : d.date,
    close : +d.close
  };
}, function(data) {
  console.log(data);
}); 
*/
/*

var data = [{timestamp:2,sent:-18, slope:.5, sample_tweets: "This is a placeholder for so:\ntweet #1\ntweet#2\ne sample tweets at x=2"},
            {timestamp:5,sent:3, slope:.5, sample_tweets: "This is a placeholder for som:\ntweet #1\ntweet#2\n sample tweets at x=5"}, 
            {timestamp:10,sent:17, slope:.5, sample_tweets: "This is a placeholder for some:\ntweet #1\ntweet#2\nsample tweets at x=10"}, 
            {timestamp:11,sent:-2, slope:.5, sample_tweets: "This is a placeholder for som:\ntweet #1\ntweet#2\n sample tweets at x=11"},
            {timestamp:14,sent:-8, slope:.5, sample_tweets: "This is a placeholder for some :\ntweet #1\ntweet#2\nample tweets at x=14"},  
            {timestamp:15,sent:4, slope:.5, sample_tweets: "This is a placeholder for some:\ntweet #1\ntweet#2\nsample tweets at x=15"}, 
            {timestamp:20,sent:3, slope:.5, sample_tweets: "This is a placeholder for some:\ntweet #1\ntweet#2\nsample tweets at x=20"}, 
            {timestamp:25,sent:18, slope:.5, sample_tweets: "This is a placeholder for som:\ntweet #1\ntweet#2\n sample tweets at x=25"},
            ];
*/
  var data = [{'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.036218142835314',
  'sent': 12.784923005260577,
  'slope': 0.8137319695532282,
  'timestamp': 2.036218142835314},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.1833402240020752',
  'sent': -19.43646570379572,
  'slope': 0.8137319695532282,
  'timestamp': 1.1833402240020752},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.2769615867791346',
  'sent': -4.866639767936059,
  'slope': 0.8137319695532282,
  'timestamp': 3.2769615867791346},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.273778468482103',
  'sent': -16.34719687268127,
  'slope': 0.8137319695532282,
  'timestamp': 7.273778468482103},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.132812840236453',
  'sent': 10.580508121526993,
  'slope': 0.8137319695532282,
  'timestamp': 6.132812840236453},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=5.20520768515267',
  'sent': 10.601295246813237,
  'slope': 0.8137319695532282,
  'timestamp': 5.20520768515267},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.0944917383854458',
  'sent': -16.59763827284675,
  'slope': 0.8137319695532282,
  'timestamp': 1.0944917383854458},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.480176696003031',
  'sent': 12.07721936236499,
  'slope': 0.8137319695532282,
  'timestamp': 6.480176696003031},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.209707982572503',
  'sent': -18.138781821918897,
  'slope': 0.8137319695532282,
  'timestamp': 5.209707982572503},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.051129031113714',
  'sent': -13.999997158985519,
  'slope': 0.8137319695532282,
  'timestamp': 8.051129031113714},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.204596143986362',
  'sent': 18.61697286182736,
  'slope': 0.8137319695532282,
  'timestamp': 5.204596143986362},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.2478594796184526',
  'sent': -16.785599523719426,
  'slope': 0.8137319695532282,
  'timestamp': 3.2478594796184526},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.6997535107857245',
  'sent': 15.692532117928597,
  'slope': 0.8137319695532282,
  'timestamp': 0.6997535107857245},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.0666103039561647',
  'sent': -14.558683736984289,
  'slope': 0.8137319695532282,
  'timestamp': 1.0666103039561647},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.596590094755241',
  'sent': -5.4806361431216395,
  'slope': 0.8137319695532282,
  'timestamp': 6.596590094755241},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.0222893791705117',
  'sent': -17.709704834762277,
  'slope': 0.8137319695532282,
  'timestamp': 3.0222893791705117},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.874163963517093',
  'sent': 11.702925658502076,
  'slope': 0.8137319695532282,
  'timestamp': 6.874163963517093},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.612646622140652',
  'sent': -14.989252130329557,
  'slope': 0.8137319695532282,
  'timestamp': 9.612646622140652},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.379897936003383',
  'sent': -15.138557705950602,
  'slope': 0.8137319695532282,
  'timestamp': 4.379897936003383},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=8.81637906484883',
  'sent': 4.6840527746666165,
  'slope': 0.8137319695532282,
  'timestamp': 8.81637906484883},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=2.5377617131358043',
  'sent': -3.733528886230091,
  'slope': 0.8137319695532282,
  'timestamp': 2.5377617131358043},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.387905685767789',
  'sent': -2.615277443237156,
  'slope': 0.8137319695532282,
  'timestamp': 4.387905685767789},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.213460879984396',
  'sent': -0.35397397922676044,
  'slope': 0.8137319695532282,
  'timestamp': 9.213460879984396},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.887703928420227',
  'sent': 9.209463201797144,
  'slope': 0.8137319695532282,
  'timestamp': 5.887703928420227},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=3.043092517645926',
  'sent': -5.51730571755207,
  'slope': 0.8137319695532282,
  'timestamp': 3.043092517645926},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=8.85813148776489',
  'sent': 6.438158204059787,
  'slope': 0.8137319695532282,
  'timestamp': 8.85813148776489},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.118407327178096',
  'sent': -12.636718295066164,
  'slope': 0.8137319695532282,
  'timestamp': 4.118407327178096},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=8.05519493130202',
  'sent': 18.165518848999834,
  'slope': 0.8137319695532282,
  'timestamp': 8.05519493130202},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.4022070163675717',
  'sent': -7.566109242620596,
  'slope': 0.8137319695532282,
  'timestamp': 0.4022070163675717},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.385181687255833',
  'sent': 19.214505094554802,
  'slope': 0.8137319695532282,
  'timestamp': 6.385181687255833},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.602313965594329',
  'sent': 11.929364958817061,
  'slope': 0.8137319695532282,
  'timestamp': 9.602313965594329},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.347739195316715',
  'sent': 2.294101036180296,
  'slope': 0.8137319695532282,
  'timestamp': 4.347739195316715},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.392898884472148',
  'sent': -0.8730363594737978,
  'slope': 0.8137319695532282,
  'timestamp': 7.392898884472148},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=1.191806180763787',
  'sent': 10.26457628281686,
  'slope': 0.8137319695532282,
  'timestamp': 1.191806180763787},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.375800363615614',
  'sent': 9.830925371978976,
  'slope': 0.8137319695532282,
  'timestamp': 9.375800363615614},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.659810421360346',
  'sent': 16.872357123912835,
  'slope': 0.8137319695532282,
  'timestamp': 9.659810421360346},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.733092451537162',
  'sent': -9.628472276459878,
  'slope': 0.8137319695532282,
  'timestamp': 4.733092451537162},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.710737220990141',
  'sent': -18.709882382639375,
  'slope': 0.8137319695532282,
  'timestamp': 4.710737220990141},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.1186976599650063',
  'sent': 4.839432875789226,
  'slope': 0.8137319695532282,
  'timestamp': 3.1186976599650063},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.7194803253946436',
  'sent': -9.411890997881894,
  'slope': 0.8137319695532282,
  'timestamp': 0.7194803253946436},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.926715781674706',
  'sent': -14.39672861149183,
  'slope': 0.8137319695532282,
  'timestamp': 2.926715781674706},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=2.6702112139906187',
  'sent': 10.391830522903376,
  'slope': 0.8137319695532282,
  'timestamp': 2.6702112139906187},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.6998010840970474',
  'sent': -11.092733973756994,
  'slope': 0.8137319695532282,
  'timestamp': 3.6998010840970474},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=2.1788742175027465',
  'sent': 14.351000030312726,
  'slope': 0.8137319695532282,
  'timestamp': 2.1788742175027465},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=5.36405674996778',
  'sent': 7.258361479072408,
  'slope': 0.8137319695532282,
  'timestamp': 5.36405674996778},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.1717514358046426',
  'sent': -13.720503366615675,
  'slope': 0.8137319695532282,
  'timestamp': 3.1717514358046426},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.3102314977250706',
  'sent': -1.2401664743177276,
  'slope': 0.8137319695532282,
  'timestamp': 1.3102314977250706},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.959650970343661',
  'sent': 19.418265617082803,
  'slope': 0.8137319695532282,
  'timestamp': 6.959650970343661},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=3.880818020847987',
  'sent': 10.518234873081948,
  'slope': 0.8137319695532282,
  'timestamp': 3.880818020847987},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.662883699357019',
  'sent': 10.758340876395424,
  'slope': 0.8137319695532282,
  'timestamp': 5.662883699357019},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.403779872759787',
  'sent': 6.274217706225025,
  'slope': 0.8137319695532282,
  'timestamp': 6.403779872759787},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.4414922910864716',
  'sent': 10.716633307608541,
  'slope': 0.8137319695532282,
  'timestamp': 0.4414922910864716},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=0.661266503973944',
  'sent': -19.171815789960405,
  'slope': 0.8137319695532282,
  'timestamp': 0.661266503973944},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=6.5040246343095305',
  'sent': 15.017258719948979,
  'slope': 0.8137319695532282,
  'timestamp': 6.5040246343095305},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.711446409368426',
  'sent': 12.459045122922245,
  'slope': 0.8137319695532282,
  'timestamp': 7.711446409368426},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=8.65552910014361',
  'sent': 9.078863784010217,
  'slope': 0.8137319695532282,
  'timestamp': 8.65552910014361},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.698510354348358',
  'sent': 19.576291972671473,
  'slope': 0.8137319695532282,
  'timestamp': 6.698510354348358},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.480497469036292',
  'sent': 19.699818315342263,
  'slope': 0.8137319695532282,
  'timestamp': 8.480497469036292},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=2.1502375217317047',
  'sent': -13.04788759434347,
  'slope': 0.8137319695532282,
  'timestamp': 2.1502375217317047},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.216691252304332',
  'sent': -8.969743164049596,
  'slope': 0.8137319695532282,
  'timestamp': 5.216691252304332},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.849761852471331',
  'sent': -19.523775954591397,
  'slope': 0.8137319695532282,
  'timestamp': 7.849761852471331},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.703720631309702',
  'sent': 8.34582710338773,
  'slope': 0.8137319695532282,
  'timestamp': 9.703720631309702},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=4.873672400744877',
  'sent': 1.4879844400327746,
  'slope': 0.8137319695532282,
  'timestamp': 4.873672400744877},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.7048190649504835',
  'sent': 3.9881869446056495,
  'slope': 0.8137319695532282,
  'timestamp': 1.7048190649504835},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.982531293861135',
  'sent': -15.087449948925828,
  'slope': 0.8137319695532282,
  'timestamp': 2.982531293861135},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.183005649256515',
  'sent': -7.068649446643378,
  'slope': 0.8137319695532282,
  'timestamp': 5.183005649256515},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=6.005987226639129',
  'sent': -16.895361121048374,
  'slope': 0.8137319695532282,
  'timestamp': 6.005987226639129},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.857743400304852',
  'sent': -19.962796473419857,
  'slope': 0.8137319695532282,
  'timestamp': 9.857743400304852},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.456664860286732',
  'sent': 9.472347389578193,
  'slope': 0.8137319695532282,
  'timestamp': 8.456664860286732},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.236058886892102',
  'sent': -11.85371785234082,
  'slope': 0.8137319695532282,
  'timestamp': 2.236058886892102},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.4481853436560257',
  'sent': -3.5376196779006808,
  'slope': 0.8137319695532282,
  'timestamp': 0.4481853436560257},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.437290171071805',
  'sent': 10.960571536513859,
  'slope': 0.8137319695532282,
  'timestamp': 9.437290171071805},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.4727657642543246',
  'sent': 4.562785358540977,
  'slope': 0.8137319695532282,
  'timestamp': 1.4727657642543246},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.723947984927824',
  'sent': -4.1694661336237075,
  'slope': 0.8137319695532282,
  'timestamp': 8.723947984927824},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.354470177811774',
  'sent': -7.998278648126087,
  'slope': 0.8137319695532282,
  'timestamp': 2.354470177811774},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.068964840410599',
  'sent': 14.433643397279994,
  'slope': 0.8137319695532282,
  'timestamp': 7.068964840410599},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample twee:\ntweet #1\ntweet#2\ns at x=9.39886456471344',
  'sent': -3.376039369586572,
  'slope': 0.8137319695532282,
  'timestamp': 9.39886456471344},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.556572846939453',
  'sent': 1.9762280898545392,
  'slope': 0.8137319695532282,
  'timestamp': 5.556572846939453},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.465466252821944',
  'sent': -2.970349692673344,
  'slope': 0.8137319695532282,
  'timestamp': 5.465466252821944},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.805949261978058',
  'sent': -6.166758965254571,
  'slope': 0.8137319695532282,
  'timestamp': 2.805949261978058},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=7.067399017603813',
  'sent': 6.19874285567356,
  'slope': 0.8137319695532282,
  'timestamp': 7.067399017603813},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.1863107017790808',
  'sent': 8.366719566008635,
  'slope': 0.8137319695532282,
  'timestamp': 1.1863107017790808},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.792236996366912',
  'sent': 17.702905345240396,
  'slope': 0.8137319695532282,
  'timestamp': 8.792236996366912},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.691207097059293',
  'sent': 6.7230761466569655,
  'slope': 0.8137319695532282,
  'timestamp': 5.691207097059293},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.3595218357934247',
  'sent': 17.775810039223373,
  'slope': 0.8137319695532282,
  'timestamp': 1.3595218357934247},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=8.959135828743637',
  'sent': -12.987076747831189,
  'slope': 0.8137319695532282,
  'timestamp': 8.959135828743637},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.950340557646713',
  'sent': 19.464167452566514,
  'slope': 0.8137319695532282,
  'timestamp': 5.950340557646713},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=0.8411137512614097',
  'sent': -12.831304688591059,
  'slope': 0.8137319695532282,
  'timestamp': 0.8411137512614097},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.1413400406330176',
  'sent': 19.389679901029336,
  'slope': 0.8137319695532282,
  'timestamp': 1.1413400406330176},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.861578555853079',
  'sent': -2.4903004002605744,
  'slope': 0.8137319695532282,
  'timestamp': 5.861578555853079},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=9.395790642699946',
  'sent': 12.65561999600193,
  'slope': 0.8137319695532282,
  'timestamp': 9.395790642699946},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=3.3412254098609218',
  'sent': 6.652228342311668,
  'slope': 0.8137319695532282,
  'timestamp': 3.3412254098609218},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=3.168542903529584',
  'sent': -3.893969574191438,
  'slope': 0.8137319695532282,
  'timestamp': 3.168542903529584},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets :\ntweet #1\ntweet#2\nat x=1.5369544210262265',
  'sent': 15.879475581841124,
  'slope': 0.8137319695532282,
  'timestamp': 1.5369544210262265},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.252911823720204',
  'sent': -16.14925740341024,
  'slope': 0.8137319695532282,
  'timestamp': 5.252911823720204},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=2.378473752845239',
  'sent': 7.056509549711092,
  'slope': 0.8137319695532282,
  'timestamp': 2.378473752845239},
 {'intercept': -3.2971347377397753,
  'sample_tweets': 'This is a placeholder for some sample tweets: \ntweet #1\ntweet#2\n at x=5.074926433631964',
  'sent': -10.079215860431031,
  'slope': 0.8137319695532282,
  'timestamp': 5.074926433631964}]



var margin = {top: 20, right: 15, bottom: 60, left: 60}
  , width = 960 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
          .domain([0, d3.max(data, function(d) { return d.timestamp + 1; })])
          .range([ 0, width ]);

var yRange = [d3.min(data, function(d) { return d.sent - 2;}), d3.max(data, function(d) { return d.sent + 1; })]
var y = d3.scaleLinear()
	      .domain(yRange)
	      .range([ height, 0 ]);
colorNegative = yRange[1]+(yRange[1]-yRange[0])*.25
colorPositive = yRange[0]
var color = d3.scaleSequential(d3["interpolate" + "Viridis"])
    .domain([colorNegative, colorPositive]);

var chart = d3.select('body')
	.append('svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')   
        
    // draw the x axis
    var xAxis = d3.axisBottom(x);

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.axisLeft(y);

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    var g = main.append("g"); 
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("circle")
          .attr("cx", function (d,i) { return x(d.timestamp); } )
          .attr("cy", function (d) { return y(d.sent); } )
          .attr("fill", function(d){ return color(d.sent)})
          .on("mouseover", d => document.getElementById('tweetText').innerHTML = d.sample_tweets)
          .on("mouseout", d => document.getElementById('tweetText').innerHTML = null);

  var line = d3.line()
        .x(function(d) {
            return x(d.timestamp);
        })
        .y(function(d) {
            return y(d.timestamp*d.slope + d.intercept);
        });
  main.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .attr('fill', 'none')
        .attr("stroke", "black");

