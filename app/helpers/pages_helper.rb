module PagesHelper
  def title
    base_title = "Google, Yandex maps"
    if @title.nil?
      base_title
    else
      "#{@title}"
    end
  end
  
  def load_code
    base_load_code = "error load code"
    if @load_code.nil?
      base_load_code
    else
      "#{@load_code}"
    end
  end
end
