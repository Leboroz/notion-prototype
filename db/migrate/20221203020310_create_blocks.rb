class CreateBlocks < ActiveRecord::Migration[7.0]
  def change
    create_table :blocks do |t|
      t.text :text
      t.text :type_of_block, default: 'paragraph', null: false

      t.timestamps
    end
  end
end
