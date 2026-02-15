Feature: Login functionality

  @test
  Scenario Outline: Login with valid credentials
    Given I navigate to login page
    When I login with username "<userName>" and password "<password>"
    Then I should login successfully
      Examples:
      | userName     | password     |
      | problem_user | secret_sauce |
      | visual_user  | secret_sauce |