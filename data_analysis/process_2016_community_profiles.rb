#!/usr/bin/env ruby

require 'nokogiri'
require 'open-uri'
require 'grim'

DOWNLOAD_FILE = false
PAGE_11 = true

community_profiles_indes_url = 'https://www.multicultural.vic.gov.au/population-and-migration/victorias-diversity/community-profiles-2016-census'

community_profiles_doc = Nokogiri::HTML.parse(open(community_profiles_indes_url))

community_profiles_pdfs = community_profiles_doc.css('table a').map do |link|
  link.attr('href')
end

community_profiles_pdfs.each do |community_profiles_pdf|
  filename = community_profiles_pdf.sub(/^.*\//, '')
  if DOWNLOAD_FILE
    open(filename, 'wb') do |file|
      file << open("https://www.multicultural.vic.gov.au#{community_profiles_pdf}").read
    end
  end

  if PAGE_11
    pdf = Grim.reap(filename)
    pdf[10].save("#{filename}.png")
  end
end

# then convert to animated gif
# convert -delay 25  -crop 780x740+60+100 -background white -alpha remove -dispose previous -loop 0  *.png animation.gif
