module Types
  class ListingType < Types::BaseObject
    graphql_name 'Listing'
    description 'A Listing object'

    field :id, ID, null: false
    field :name, String, null: true
    field :street, String, null: true
    field :city, String, null: true
    field :zipcode, String, null: true
    field :state, String, null: true
  end
end
