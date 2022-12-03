module BlocksHelper
  BLOCKS = {
    'header' => { placeholder: 'Heading 1', code: '/1' },
    'paragraph' => { placeholder: 'Type / for blocks @ to link docs or people', code: '/' }
  }.freeze

  def block_object(block_type)
    BLOCKS[block_type]
  end

  def blocks
    BLOCKS
  end
end
