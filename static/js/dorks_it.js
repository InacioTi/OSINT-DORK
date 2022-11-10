function google_it(type) 
{
    
    site = document.getElementById('target').value;                            
    url = 'https://www.google.com/search?q=';
    url = url + site + " " ;

switch(type)
{
    case 1:
        url += '+intitle:index.of';
        break;
    case 2:
        url += '+ext:sql+|+ext:dbf+|+ext:mdb';
        break;
    case 3:
        url += '+inurl:wp-+|+inurl:wp-content+|+inurl:plugins+|+inurl:uploads+|+inurl:themes+|+inurl:download';
        break;
    case 4:
        url += '+ext:log';
        break;
    case 5:
        url += '+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup';
        break;
    case 6:
        url += '+inurl:login';
        break;
    case 7:
        url += '+intext:"sql+syntax+near"+|+intext:"syntax+error+has+occurred"+|+intext:"incorrect+syntax+near"+|+intext:"unexpected+end+of+SQL+command"+|+intext:"Warning:+mysql_connect()"+|+intext:"Warning:+mysql_query()"+|+intext:"Warning:+pg_connect()"';
        break;
    case 8:
        url += '+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv';
        break;
    case 9:
        url += '+ext:php+intitle:phpinfo+"published+by+the+PHP+Group"';
        break;
    case 10:
        url =  'https://web.archive.org/web/*/' + site + '/*';
        break; 
	case 11:
        url += '+inurl:readme+|+inurl:license+|+inurl:install+|+inurl:setup+|+inurl:config';
        break;
	case 12:
        url = 'https://www.google.com/search?q=site:pastebin.com+' + site;
        break;
	case 13:
        url = 'https://www.google.com/search?q=site:linkedin.com+employees+' + site;
        break;
}
    window.open(url);

}

function shodan_it(type) 
{
    
    site = document.getElementById('target').value;                            
    url = 'https://www.shodan.io/search?query=';
    url = url + site + " " ;

switch(type)
{
    case 1:
        url += '"default password"';
        break;
    case 2:
        url += 'guest login ok';
        break;
    case 3:
        url += 'http.title:"dashboard"';
        break;
    case 4:
        url += 'http.title:"control panel"';
        break;
    case 5:
        url += 'http.title:"phpmyadmin"';
        break;
    case 6:
        url += 'kibana content-length:217';
        break;
    case 7:
        url += 'http.title:outlook exchange' ;
        break;
    case 8:
        url += '"webvpn="' ;
        break;
    case 9:
        url +=  'http.title:"Index of /" http.html:".pem"' ;
        break;
   }

    window.open(url);

}

function github_it(type) 
{
    
    site = document.getElementById('target').value;                            
    url = 'https://github.com/search?q=';
    url = url + site + " " ;

switch(type)
{
    case 1:
        url += '+intitle:index.of';
        break;
    case 2:
        url += 'api_key';
        break;
    case 3:
        url += 'app_AWS_SECRET_ACCESS_KEY ';
        break
    case 4:
        url +=  'token' ;
        break;
    case 5:
        url += 'composer.json';
        break;
    case 6:
        url += 'config';
        break;
    case 7:
        url += 'credentials';
        break;
    case 8:
        url += 'DB_PASSWORD' ;
        break;
    case 9:
        url += 'dotfiles' ;
        break;
   case 24:
        url += 'filename:.bash_history' ;
        break;
    case 25:
        url += 'filename:.bash_profile aws' ;
        break;
    case 26:
        url +=  'filename:.bashrc mailchimp' ;
        break;
    case 27:
        url +=  'filename:CCCam.cfg' ;
        break;
    case 28:
        url +=  'filename:config irc_pass' ;
    break;
    case 29:
        url +=  'filename:config.php dbpasswd' ;
        break; 
    case 30:
        url +=  'filename:config.json auths';
        break; 
    case 31:
        url +=  'filename:config.php pass' ;
        break;
    case 32:
        url +=  'filename:config.php dbpasswd';
        break; 
    case 33:
        url +=  'filename:connections.xml' ;
        break;
    case 34:
        url +=  'filename:.cshrc' ;
        break;
    case 35:
        url +=  'filename:.git-credentials' ;
        break; 
    case 36:
        url +=  'filename:.ftpconfig' ;
        break;
    case 37:
        url +=  'filename:.history' ;
        break;
    case 38:
        url +=  'filename:gitlab-recovery-codes.txt' ;
        break;
    case 39:
        url +=  'filename:.htpasswd'  ;
        break;
    case 40:
        url +=  'filename:id_rsa' ;
        break;
}
    window.open(url);

}
