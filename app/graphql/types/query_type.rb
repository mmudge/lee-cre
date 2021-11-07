module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :current_user, UserType, 'Current logged in User', null: true, authenticate: true
    def current_user
      # token = request.headers["Authorization"].to_s
      # User.find_for_database_authentication(authentication_token: token)
      # context[:user_context]
      puts '*' * 100
      puts context.inspect
      puts context
      # puts context[:user]
      # puts context[:current_user]
      puts context[:current_resource]
      # puts user
      context[:current_resource]
      # context[:current_user]
    end

    field :listings, ListingType.connection_type, null: true, authenticate: false do
      description "A list of all Listings"
      argument :query, String, required: false
    end

    def listings(query: nil)
      listings = Listing.all
      # listings = listings.where('name ILIKE :q OR full_name ILIKE :q', q: "#{query}%") if query.present?
      listings = listings.where('name ILIKE :q', q: "#{query}%") if query.present?
      listings
    end

    field :listing, ListingType, null: true, authenticate: false do
      description "A single Listing found by ID"
      argument :id, ID, required: true
    end

    def listing(id:)
      Listing.find(id)
    end
  end
end
