class AddAttachmentThumbnailToPlanners < ActiveRecord::Migration
  def self.up
    change_table :planners do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :planners, :thumbnail
  end
end
