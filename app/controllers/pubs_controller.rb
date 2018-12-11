class PubsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_pub, only: [:show, :edit, :update, :destroy]

  # GET /pubs
  # GET /pubs.json
  def index
    @pubs = Pub.all

  end

  # GET /pubs/1
  # GET /pubs/1.json
  def show
    @pub = Pub.find(params[:id])
    render json: @pub, include: 'drinks'
  end

  # ILIKE query is used here so it will find any matching partial queries lower or upper and will feed me the JSON response back 
  def search
    render json: Pub.where('name || location ILIKE ?', "%#{params[:query]}%")
  end

  def geo_search
    render json: Pub.near("#{params[:coords]}", '15, units: :km')
  end

  # GET /pubs/new
  def new
    @pub = Pub.new
  end

  # GET /pubs/1/edit
  def edit
  end

  # POST /pubs
  # POST /pubs.json
  def create
    @pub = Pub.new(pub_params)

    respond_to do |format|
      if @pub.save
        format.html { redirect_to @pub, notice: 'Pub was successfully created.' }
        format.json { render :show, status: :created, location: @pub }
      else
        format.html { render :new }
        format.json { render json: @pub.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pubs/1
  # PATCH/PUT /pubs/1.json
  def update
    respond_to do |format|
      if @pub.update(pub_params)
        format.html { redirect_to @pub, notice: 'Pub was successfully updated.' }
        format.json { render :show, status: :ok, location: @pub }
      else
        format.html { render :edit }
        format.json { render json: @pub.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pubs/1
  # DELETE /pubs/1.json
  def destroy
    @pub.destroy
    respond_to do |format|
      format.html { redirect_to pubs_url, notice: 'Pub was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pub
      @pub = Pub.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pub_params
      params.require(:pub).permit(:name, :location)
    end
end
