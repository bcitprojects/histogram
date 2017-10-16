class Enrollment < ActiveRecord::Base
  belongs_to :student
  belongs_to :course
  validates  :student_id, presence: true
  validates  :course_id, presence: true
  validates  :percentage, numericality: {greater_than_or_equal_to: 0.0, less_than_or_equal_to: 100.00}
end
