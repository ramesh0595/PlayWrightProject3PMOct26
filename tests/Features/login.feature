@login @E2E
Feature: To validate the login functionallity of the facebook application

Background:
Given The user should be in login page

@smoke @regression
Scenario: Login Invalid-To validate the login functionallity with Invalid Credentials

When The user has to fill the userName "ramesh@gmail.com" and password "123456789"
And The user has to click the login button
Then The user should be navigate the invalid login page

@sanity @regression
Scenario: Login valid-To validate the login functionallity with valid Credentials

When The user has to fill the userName "suresh@gmail.com" and password "425263636"
And The user has to click the login button
Then The user should be navigate the invalid login page

