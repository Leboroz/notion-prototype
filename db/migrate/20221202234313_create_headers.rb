class CreateHeaders < ActiveRecord::Migration[7.0]
  def change
    create_table :headers do |t|
      t.text :title

      t.timestamps
    end
  end
end
