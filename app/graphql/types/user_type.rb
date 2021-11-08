module Types
  class UserType < Types::BaseObject
    graphql_name 'User'
    description 'A User object'

    field :id, ID, null: false
    field :email, String, null: true
  end
end
