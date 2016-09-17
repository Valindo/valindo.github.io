class AddAttachmentThumbnailToCaterers < ActiveRecord::Migration
  def self.up
    change_table :caterers do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :caterers, :thumbnail
  end
end
