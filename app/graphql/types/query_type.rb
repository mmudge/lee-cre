module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

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
