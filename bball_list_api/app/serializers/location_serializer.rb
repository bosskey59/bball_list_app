class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :number_of_courts, :indoor
  has_many :lists
end
