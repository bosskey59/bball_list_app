class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :list
  has_one :location, through: :list

end
