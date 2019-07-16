class List < ApplicationRecord
    belongs_to :location
    has_many :players
end
