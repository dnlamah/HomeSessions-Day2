A simple command line application that consumes a Public API using a HTTP client library.
This app will search wikipedia.com based on the string supplied as argument.

1. clone the application to your computer,
   Dependencies: 
   a. npm
   b. node
   c. xhr2
   run the commands below in terminal inside the application directory to install
      npm install -g
      npm install nodejs -g
      npm install xhr2 -g
      

The following commands will get 10 "hello world" articles from wikipedia 

    node libs/example.js hello world

    output will be an object of the following format
    { '1': 
   { Title: 'Chakravarthy  1995 film ',
     Link: 'https://en.wikipedia.org/wiki/Chakravarthy_(1995_film)' },
  '2': 
   { Title: 'Manmadha Leelai',
     Link: 'https://en.wikipedia.org/wiki/Manmadha_Leelai' },
  '3': 
   { Title: 'Hello Kitty',
     Link: 'https://en.wikipedia.org/wiki/Hello_Kitty' },
  '4': 
   { Title: 'Hello My Dear Wrong Number',
     Link: 'https://en.wikipedia.org/wiki/Hello_My_Dear_Wrong_Number' },
  '5': 
   { Title: 'Hello  Dear Numbers',
     Link: 'https://en.wikipedia.org/wiki/Hello,_Dear_Numbers' },
  '6': 
   { Title: 'Hello  Dolly   musical ',
     Link: 'https://en.wikipedia.org/wiki/Hello,_Dolly!_(musical)' },
  '7': 
   { Title: 'Roman  My Dear Boy ',
     Link: 'https://en.wikipedia.org/wiki/Roman_(My_Dear_Boy)' },
  '8': 
   { Title: 'The Adventures of Hello Kitty   Friends',
     Link: 'https://en.wikipedia.org/wiki/The_Adventures_of_Hello_Kitty_&_Friends' },
  '9': 
   { Title: 'Hello  Dear Wind',
     Link: 'https://en.wikipedia.org/wiki/Hello,_Dear_Wind' },
  '10': 
   { Title: 'Single V',
     Link: 'https://en.wikipedia.org/wiki/Single_V' } }
