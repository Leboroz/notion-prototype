require 'rails_helper'

RSpec.describe Block, type: :model do
  before :all do
    Block.destroy_all
  end

  subject { FactoryBot.create :block }

  context 'Validations' do
    it 'should have a type' do
      subject.type_of_block = nil
      expect(subject).to_not be_valid
    end
  end
end
