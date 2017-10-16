class Student < ActiveRecord::Base
  has_many :enrollments
  validates :name, length: { minimum: 2 }, presence: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, presence: true
end
