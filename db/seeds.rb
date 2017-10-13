# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Student.destroy_all
Course.destroy_all
Enrollment.destroy_all

s1 = Student.create("name" => "kevin", "email" => "kevin@le.com")
s2 = Student.create("name" => "Timmy", "email" => "timmy@le.com")
s3 = Student.create("name" => "George", "email" => "george@le.com")

students = []
students << s1 << s2 << s3

c1 = Course.create("name" => "CMPT 276", "description" => "Intro to Software Engineering")
c2 = Course.create("name" => "CMPT 321", "description" => "Intro to 321")
c3 = Course.create("name" => "CMPT 414", "description" => "Intro to 414")
c4 = Course.create("name" => "CMPT 314", "description" => "Intro to 314")

courses = []
courses << c1 << c2 << c3 << c4

courses.each do |c|
  students.each do |s|
    @percentage = rand(0.00...100.00).round(2)
    Enrollment.create("student_id" => s.id, "course_id" => c.id, "percentage" => @percentage)
  end
end
