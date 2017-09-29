class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :name
      t.integer :age
      t.text :description

      t.timestamps null: false
    end
  end
end
