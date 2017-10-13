class HistogramController < ApplicationController
  def index
  end

  def course
    @course = Course.find(params[:id])

    render :index
  end
end
