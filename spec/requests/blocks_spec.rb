require 'rails_helper'

RSpec.describe 'Block', type: :request do
  describe 'GET /index' do
    it 'should visit the home page' do
      get '/'
      expect(response).to render_template(:index)
    end
  end
end
