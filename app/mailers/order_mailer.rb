class OrderMailer < ApplicationMailer
  default from: '"Aloop Sales" <sales@aloop.com>'

  def order_placed(user, order)
    @user = user
    @order = order

    mail(to: user.email, subject: "Your Aloop order has been placed!")
  end

  def new_order(user, order)
    @user = user
    @order = order

    mail(to: "lizbayardelle@gmail.com", subject: "A new order has been placed on Aloop.com")
  end

  def order_shipped(user, order)
    @user = user
    @order = order

    mail(to: user.email, subject: "Your Aloop order has shipped!")
  end
end
