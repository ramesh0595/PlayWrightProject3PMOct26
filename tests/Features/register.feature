@register @E2E
Feature: To validate the login functionallity of the facebook application

Background:
Given The user should be in login page

@regression
Scenario: Register Invalid-To validate the registration functionallity

When The user has to click the create new account link
And The user has to fill the firstName,lastName and other details
And The user has to click the submit button
Then The user should be get successfully registered meassage

@retest @regression
Scenario: Register valid-To validate the registration functionallity

When The user has to click the create new account link
And The user has to fill the firstName,lastName and other details
And The user has to click the submit button
Then The user should be get successfully registered meassage