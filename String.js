//String

'foobar'.length;//6

//Return valuetrue if the given string is found anywhere within the search string; otherwise, false if not.
'foobar'.includes('oo'); //true
'foobar'.includes('bar',3); //true (index position start searching) 
'foobar'.includes('bar',4); //false
'Blue Whale'.includes('blue'); //false case sensitive

'foobar'.toUpperCase(); //FOOBAR
'FOOBAR'.toLowerCase(); //foobar

'foobar'.indexOf('o'); //1
'foobar'.indexOf('oo'); //1
'foobar'.indexOf('z'); //-1

'foo'.concat('bar','!');//foobar!

'foobar'.slice(1,3); //oo equivalent 'foobar'.substring(1,3);
'foobar'.slice(1); //oobar equivalent 'foobar'.substring(1);


'foo bar'.split(' ');//[ 'foo', 'bar' ]
'foobar'.split('b');//[ 'foo', 'ar' ]
'foo,bar'.split(',');//[ 'foo', 'bar' ]
'foobar'.split('');//[ 'f', 'o', 'o', 'b', 'a', 'r' ]
'foobar'.split();//[ 'foobar' ]

'foobar'.substring(1);