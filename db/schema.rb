# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_21_214503) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "instrument_setups", force: :cascade do |t|
    t.bigint "setup_id", null: false
    t.bigint "instrument_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["instrument_id"], name: "index_instrument_setups_on_instrument_id"
    t.index ["setup_id"], name: "index_instrument_setups_on_setup_id"
  end

  create_table "instruments", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "photo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "category"
  end

  create_table "setups", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "photo"
    t.string "genre"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_setups_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "photo"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "instrument_setups", "instruments"
  add_foreign_key "instrument_setups", "setups"
  add_foreign_key "setups", "users"
end
