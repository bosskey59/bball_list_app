class Player < ApplicationRecord
    belongs_to :list
    has_one :location, through: :list
end