require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get google" do
    get :google
    assert_response :success
  end

  test "should get yandex" do
    get :yandex
    assert_response :success
  end

end
