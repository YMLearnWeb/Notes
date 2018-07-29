# Mac OS Website Env

## Mac OS has Apache. To check its version, open the Terminal
> httpd -v 

## Start Apache and Test it on the localhost

In the Terminal 
'''
> sudo apachectl start
'''
Then in the browser, try http://localhost. If you see it works, it eams nthe Apache starts.

The stop and restart command
'''
> sudo apachectl stop
> sudo apachectl restart

## Start your site
1. Create Sites directory 
   ---
   > cd mkdir Sites
   ---
2. > cd /etc/apache2/users, if there is no username.conf, create one
  ---
   > sudo touch username.conf
   > sudo chmod 644 username.conf
   ---
3. open username.conf
   ---
    > sudo vi username.conf
    > <Directory "/Users/username/Sites/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
        Require all granted
      </Directory>
   ---
 4. edit /etc/apache2/httpd.conf, uncomment
 ---
    Include /private/etc/apache2/extra/httpd-userdir.conf
    LoadModule userdir_module libexec/apache2/mod_userdir.so
---
 
 5. Edit /etc/apache2/extra/httpd-userdir.conf, uncomment
 ---
    Include /private/etc/apache2/users/*.conf
 ---
    
 6. Restart Apache 
    >sudo apachectl restart
 
    Note username is your username.
 
 7. Try in browser http://localhost/~username
 
 for example http://localhost/~mycomputer
    

