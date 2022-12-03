module BlocksHelper
  BLOCKS = {
    'Heading 1' => { placeholder: 'Heading 1' },
    'paragraph' => { placeholder: 'Type / for blocks @ to link docs or people' }
  }.freeze

  def block_object(block_type)
    BLOCKS[block_type]
  end

  def blocks
    BLOCKS
  end
end
