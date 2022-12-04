class BlocksController < ApplicationController
  before_action :set_block, only: %i[update destroy]

  # GET /blocks or /blocks.json
  def index
    @blocks = Block.all
  end

  # POST /blocks
  def create
    @block = Block.new(block_params)

    @block.save
  end

  # PATCH/PUT /blocks/1
  def update
    @block.update(block_params)
  end

  # DELETE /blocks/1
  def destroy
    @block.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_block
    @block = Block.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def block_params
    params.require(:block).permit(:text, :type_of_block)
  end
end
