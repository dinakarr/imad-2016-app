# imad-2016-app

--------------------------
P3
--------------------------
- building a app using Node-JS
- Git for source code mgmt
- Concept of Reverse Proxies...leads to Load Balancers
- Building a Local Development Environment (?)

nginx
- software to provide a web server. It can act as a reverse proxy server for TCP, UDP, HTTP, HTTPS, SMTP, POP3, and IMAP protocols
- Business of creating a front for multiple servers is called "Reverse Proxies" (running of default port-80) -- a web server that fronts other web servers -- channels reeusts to upstream processes

- Nginx - software that serves as a Reverse Proxy, sitting in between the server machine and all the processes under it (upstream servers).
- Uses port-80 by default
- https://en.wikipedia.org/wiki/Nginx
- Spreading web traffic across different web servers is called "Load Balancing"
- Commonly used "Reverse Proxies"
. nginx 
. HAproxy

https://github.com/dinakarr/imad-2016-app.git

* https://git-scm.com/
- Git is a free and open source distributed version control system (VCS) designed to handle everything from small to very large projects with speed and efficiency.

* http://blog.scottlowe.org/2015/01/14/non-programmer-git-intro/
- A version control system (sometimes just referred to as a VCS) is a system that tracks changes to files (or groups of files) over time.
- The group of files that a VCS tracks is called a repository.
- A distributed version control system (sometimes called a DVCS) allows multiple systems to host entire copies of the repository, and allows the users on those systems to collaborate on changes to the repository.

* Using the server files from "Localhost"
- Copy link from Github -- replicate folder in PC
- Install <Node JS> from the web -- activate on the PC using <npm install> in the directory <C:\webapp\imad-2016-app>
- <cd node_modules> -- this includes the directories <express> and <morgan>
- Now the files can be edited using SublimeText -- but CMD has to be told the path to Sublime which (in my PC) is on <D:>
- This can be done by following instructions from <http://stackoverflow.com/questions/9440639/sublime-text-from-command-line-win7>
- Essentially, the path can be set using the model command -<doskey subl="C:\Program Files\Sublime Text 2\sublime_text.exe" $*  >
- Now the SublimeText files can be opened directly from CMD!

* Adding changes in local PC to Github
- git add ui\index.html
- git commit -m "Made some changes locally"
- git push origin master (for pushing the files to the central repository)
