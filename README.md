Tech Week Challenge: Gilded Rose
=================

As part of week 10 at Makers I'll be taking the Gilded Rose refactoring challenge in JS.


The Original Guilded Rose Brief:
------
"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item
All items have a Quality value which denotes how valuable the item is
At the end of each day our system lowers both values for every item
Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality as such its Quality is 80.
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. **However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you).""**


User Stories:
-------

```
  
User stories 

As an innkeeper
So that I don't sell out-of-date items
I want my items to know when they go off

As an inkeeper
So that I charge customers a fair price for items
I want my items to know their quality/value

As an innkeeper
So that prices always reflect the item's value and freshness
I want both values lowered at the end of each day

As an innkeeper
So that I accurately record an item's freshness
I want the quality to degrade twice as fast once the sell-by date passes

As an innkeeper
So that I do not make anyone ill
I don't want an item's quality to fall below zero

As an innkeeper
So that I charge appropriately for Aged Brie
I want the quality to increase as it ages

As an innkeeper
So I don't end up stocking antique-extra-lux cheese
I want to limit the quality of an item to 50

As an innkeeper
So I do not invoke the wrath of the god Sulfuras
The legendary item 'Sulfuras' does not have to be sold and never decreases in quality

As an inkeeper
So that I charge appropriately for Backstage Passes
I want them to increase in Quality as their SellIn value approaches;
I want the value to increase by two when there are 10 days or less until SellIn and by three when there are 5 days or less;
The Backstage Pass quality drops to 0 after the SellIn date passes

As an inkeeper
So I accurately record the value of Conjured items
I want their quality to decrease twice as fast as normal items

```



Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. 

**However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership.
...
(you can make the UpdateQuality method and Items property static if you like, we’ll cover for you).**


Features spec:
------

### Requirements

* Refactor the code in such a way that adding the new "conjured" functionality is easy.




Minimum Viable Product (MVP):
-----

I've decided my MVP will be refactoring the functionality of the Shop class updateQuality function into three functions in total. 




Approach:
-----

* Create UML sequence and diagrams based on the user stories

* Decide on order user stories will be met

* Create branch for new feature, checkout to that branch

* Write a feature test, watch it fail

* Write the code to make it pass

* Refactor

* Make pull request to merge with master branch

* Review changes

* Accept / make change requests

* Merge branch with master

* Repeat this until the MVP is met


Program Structure:
-----

The Account class is responsible for monitoring the account history. It has methods for making withdrawals and deposits and keeping track of the dates on which they were made and the balance that resulted from these transactions.

The Statement class is responsible for outputting this information into the format described in the 'Acceptance Criteria' section above.

There are no dependencies between the classes.


Outcome:
-----

* Everything created using strict TDD (all tests passing, 100% test coverage)

* Practised Git workflow, working on specific branches for each feature before merging back into master (committing with each significant piece of work finished) 

* First four user stories met



Improvements:
-----




Technologies used
-------

* RSpec
* Ruby
* Rubocop
* Travis CI



## How to use bank_tech_test ##

System requirements
-------

* Ruby 2.5.0
* Mac OS X
* Chrome browser



### Set up ###

1. clone the repo<br/>
Under the repo name click *clone or download*<br/>
Click on *use HTTPs*, copy the clone URL of the repo<br/>
In the terminal go on the working directory where you want to clone the project<br/>
Use the `git clone` command and paste the clone URL then press enter :

```shell
$ git clone 
```

2. On your local machine go inside of the *bank_tech_test* directory :

```shell
$ cd bank_tech_test
```
3. To install all the *gems* contained in the *Gemfile*, install and run *Bundle* :
Install :

```shell
$ install bundle
```
Run:

```shell
$ bundle
```
4. You can see the different directories, with the `ls` command.


```

### Run the tests ###

1. Check that the codes are passing the test. From the root *bank_tech_test* directory, run the *spec*.<br/>
You can check all the files in one go:

```shell
$ cd bank_tech_test
$ rspec
```
To check only one file at a time :

```shell
$ cd bank_tech_test
$ rspec spec/file_name_spec.rb
```

2. Check that the code respects the quality of the *Rubocop* guideline, by running `rubocop` from the *bank_tech_test* directory :

```shell
$ cd bank_tech_test
$ rubocop
```

## Run the app ##

1. On the command line, from the root directory *bank_tech_test*, use the `irb` command :

```shell
$ cd bank_tech_test
$ irb
```
2. Follow the steps below to create an account, a statement, withdraw and deposit amounts and output the result of these to the console.

<img src="./screenshots/bank_tech_test_screenshot.png">




## Authors ##

@joaoag (João Abbott-Gribben)
