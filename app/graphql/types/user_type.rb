module Types
  class UserType < Types::BaseObject
    graphql_name 'User'
    description 'A User object'

    field :id, ID, null: false
    field :email, String, null: true
    field :token, String, null: true
    # def token
    #   form_authenticity_token
    # end

  end
end
