json.extract! header, :id, :title, :created_at, :updated_at
json.url header_url(header, format: :json)
