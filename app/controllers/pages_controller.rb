class PagesController < ApplicationController
  def google
    @title = "Google maps"
    @src_code = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAzR_AV9ozxfYfufJXwza5c_PraTwvvnic&sensor=false"
    @load_code = "google_helper"
                
  end

  def yandex
    @title = "Yandex maps"
    @src_code = "http://api-maps.yandex.ru/1.1/index.xml?key=AACxjU8BAAAAtQGmPQMCBLVzKARi8gQ63Qj6DwVAy9IQ-RwAAAAAAAAAAABQ7gLUaKCo8s-30Q9cl2bO7WHU8g=="
    @load_code = "yandex_helper"
  end
end
