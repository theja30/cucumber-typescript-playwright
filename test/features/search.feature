Feature: Search functionality

  Scenario: Add products to cart
    Given I navigate to login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should login successfully
    When I search and add to cart
      | ProductName         |
      | Sauce Labs Backpack |
      | Sauce Labs Onesie   |
    Then I should see the cart qty as 2

  Scenario: Add product to cart
    Given I navigate to login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should login successfully
    When I search and add to cart
      | ProductName             |
      | Sauce Labs Bolt T-Shirt |
    Then I should see the cart qty as 1