class ListSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :location
  has_many :players
end