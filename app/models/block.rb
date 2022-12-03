class Block < ApplicationRecord
  after_create_commit { broadcast_append_to 'blocks' }
  after_update_commit { broadcast_replace_to 'blocks' }
  after_destroy_commit { broadcast_remove_to 'blocks' }
end
