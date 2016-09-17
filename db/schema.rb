# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160908093434) do

  create_table "addresses", force: :cascade do |t|
    t.text     "location"
    t.integer  "venue_id"
    t.integer  "planner_id"
    t.integer  "caterer_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "decorator_id"
    t.index ["caterer_id"], name: "index_addresses_on_caterer_id"
    t.index ["decorator_id"], name: "index_addresses_on_decorator_id"
    t.index ["planner_id"], name: "index_addresses_on_planner_id"
    t.index ["venue_id"], name: "index_addresses_on_venue_id"
  end

  create_table "amenities", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "quantity"
    t.integer  "venue_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["venue_id"], name: "index_amenities_on_venue_id"
  end

  create_table "caterers", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.index ["user_id"], name: "index_caterers_on_user_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "mobile"
    t.string   "landline"
    t.string   "mobile_alt"
    t.string   "landline_alt"
    t.string   "email"
    t.integer  "venue_id"
    t.integer  "caterer_id"
    t.integer  "planner_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "decorator_id"
    t.index ["caterer_id"], name: "index_contacts_on_caterer_id"
    t.index ["decorator_id"], name: "index_contacts_on_decorator_id"
    t.index ["planner_id"], name: "index_contacts_on_planner_id"
    t.index ["venue_id"], name: "index_contacts_on_venue_id"
  end

  create_table "decorators", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.text     "terms"
    t.index ["user_id"], name: "index_decorators_on_user_id"
  end

  create_table "dishes", force: :cascade do |t|
    t.string   "title"
    t.string   "dish_type"
    t.integer  "menu_id"
    t.integer  "package_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["menu_id"], name: "index_dishes_on_menu_id"
    t.index ["package_id"], name: "index_dishes_on_package_id"
  end

  create_table "images", force: :cascade do |t|
    t.string   "caption"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.integer  "venue_id"
    t.integer  "caterer_id"
    t.integer  "planner_id"
    t.integer  "menu_id"
    t.integer  "decorator_id"
    t.index ["caterer_id"], name: "index_images_on_caterer_id"
    t.index ["decorator_id"], name: "index_images_on_decorator_id"
    t.index ["menu_id"], name: "index_images_on_menu_id"
    t.index ["planner_id"], name: "index_images_on_planner_id"
    t.index ["venue_id"], name: "index_images_on_venue_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "caterer_id"
    t.index ["caterer_id"], name: "index_menus_on_caterer_id"
  end

  create_table "offers", force: :cascade do |t|
    t.text     "description"
    t.integer  "venue_id"
    t.integer  "caterer_id"
    t.integer  "planner_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["caterer_id"], name: "index_offers_on_caterer_id"
    t.index ["planner_id"], name: "index_offers_on_planner_id"
    t.index ["venue_id"], name: "index_offers_on_venue_id"
  end

  create_table "packages", force: :cascade do |t|
    t.string   "title"
    t.integer  "caterer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["caterer_id"], name: "index_packages_on_caterer_id"
  end

  create_table "planners", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id"
    t.text     "terms"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.index ["user_id"], name: "index_planners_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "display_picture"
    t.string   "name"
    t.text     "comment"
    t.decimal  "rating"
    t.integer  "venue_id"
    t.integer  "caterer_id"
    t.integer  "planner_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["caterer_id"], name: "index_reviews_on_caterer_id"
    t.index ["planner_id"], name: "index_reviews_on_planner_id"
    t.index ["venue_id"], name: "index_reviews_on_venue_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "name"
    t.boolean  "admin",                  default: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.boolean  "paid",                   default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "venues", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_id"
    t.text     "terms"
    t.string   "venue_type"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.integer  "capacity"
    t.decimal  "price"
    t.index ["user_id"], name: "index_venues_on_user_id"
  end

end
