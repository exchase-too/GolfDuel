class User < ApplicationRecord
    has_many :wagers
    has_many :golfers, through: :wagers
end
