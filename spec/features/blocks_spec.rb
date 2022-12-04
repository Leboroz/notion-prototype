require 'rails_helper'

RSpec.describe 'Home Page', type: :feature do
  describe 'blocks container' do
    before :each do
      Block.destroy_all
      visit root_path
      div = page.find('div', id: 'blocks')
      div.double_click
      @block = div.find('.paragraph')
    end

    it 'should show one block on the page' do
      expect(@block.text).to eql('')
    end
  end
end
