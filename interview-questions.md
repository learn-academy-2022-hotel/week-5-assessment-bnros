# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: When calling a super in a class, it allows the child class to inherit common behaviors from the parent class. This is designated using super().

Researched answer: In Ruby, when calling the super method inside a class, it invokes the same methods that are found in the parent class of the current class. This in turn allows the sublass to inherit full functionality or partial functionality of the parent class. Additionally, it also allows you to modify or add to the new subclass.

2. What is a gem?

Your answer: A gem is a type of testing dependencies that are required to be installed when testing Ruby code with RSpec.

Researched answer: A Gem in Ruby refers to a package manager module that you can install and use on every project. Additionally, a gem is a self-contained format that contains a standard format
to distribute many different types of programs and libraries within the Ruby language. The "gem" command itself is called to build, download, upload, and install these Gem packages. This is useful because it allows us because by using gems, it allows us to extend the functionality of Ruby by implementing additional code, functionalities, and other frameworks that are not typically found in the standard Ruby library.

3. What is a relational database? Are there other kinds of databases?

Your answer: Unfortunately, I cannot recall wheat a relational database is.

Researched answer: Relational databases refers programs that are used for the purpose of creating, updating, and managing relational databases. Relational databases are useful because it allows organization of data into tables and columns, similarly to what you would find in a spreadsheet. The data found within the columns and tables can then be related to each other by using primary keys. The most popular ones are PostgreSQL, MySQL, MariaDB, Microsoft SQL Server, and Oracle Database. Additionally, asides fromr relational databases, a few other databases that exists are:
- NoSQL databases - databases that do not use the relational model, but instead opt to use flexible schema
-graph databases - as the name implies, used to store and query data that is then organized into a graph

4. What are primary keys? Why are they important?

Your answer: Primary keys are special, key words that allow relational databases to relate the data within columns and tables together. 

Researched answer: Primary keys are unique identitifers that aid in identifying and finding a specific row, or record within a given relational database table. There are two different types of primary keys: natural key, and surrogate key Primary keys are important because they allow relationships between tables to be defined, and they are structured within a column, or sets of columns and can be used to identify each row within a table, without returning any duplicate values that may appear.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: HTTP verbs are Get, Post, Delete, and I can't remember what the other ones are. Get corresponds to the R-read in CRUD, Post refers to C-create in CRUD, and Delete corresponds to the D-delete in the CRUD model

Researched answer: TheThe 5 HTTP verbs, also known as the HTTP methods refer to Get, Post, Put, Patch, and Delete. Respectively, they correspond to the developer's philosophy (CRUD action's) of R-ead, C-reate, U-pdate, U-pdate, and D-elete. These verbs tells the server what to do with the data being identified.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Stands for Representational State Transfer, RESTful routes are a way to organize, clean, consistent URL paths by implementing HTTP verbs and CRUD actions

2. Model validations: Model validation refers to the process of checking that a given data model, or a set of data models, meets certain requirements or constraints before it is used. The purpose of this is to ensure that the data is correct, consistent and complete.

3. Params: Short for parameters, a param is a value that is passed onto a function, or method, or in order to control its behavior or to specify the input it should operate on

4. ERB: ERB stands for Embeded Ruby, refers to a templating system that allows the programmer to embed Ruby code inside of plain text files. Typically used in frameswork such as Ruby on Rails

5. API: API stands for Application Program Interface, and refers to a set of rules or protocols and specific tools that should be used when building sofrware and applications.
