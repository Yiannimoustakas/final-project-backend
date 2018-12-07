class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]
  # skip CORS authenticity
  skip_before_action :verify_authenticity_token

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create

    @order = Order.new user: @current_user

    respond_to do |format|
      if @order.save

        # can't use .where syntax because it removes duplicates,
        # and we need them for ordering multiples of the same drinks
        # TODO: add LineItem model to order to track quantities for each drink
        # @order.drinks << Drink.where( ids: params[:drink_ids] )
        p "drink IDs:", params[:drink_ids]
        order_drinks = params[:drink_ids].map{ |id| Drink.find id }
        p "drink objects: ", order_drinks
        @order.drinks << order_drinks

        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render(json: {order: @order}) }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      params.require(:order).permit(:user_id, :drink_id)
    end
end
