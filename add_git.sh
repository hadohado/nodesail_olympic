create a new repository on the command line

echo "# nodesail_olympic" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/hadohado/nodesail_olympic.git
git push -u origin master


---------

push an existing repository from the command line

git remote add origin https://github.com/hadohado/nodesail_olympic.git
git push -u origin master
