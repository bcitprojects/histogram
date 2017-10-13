class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.text :name
      t.text :email

      t.timestamps null: false
    end
  end
end
