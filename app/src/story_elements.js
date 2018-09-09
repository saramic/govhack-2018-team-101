const storyElements = {
  storyElements: [
    {
      id: "school",
      template: "You are at Parkdale Primary School...",
      image:
        "http://www.parkdaleps.vic.edu.au/uploaded_files/media/gallery/parkdale_primary_201527_crop.jpg",
      dataSource: {
        name: "School Locations",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/295",
        link: "https://www.data.vic.gov.au/data/dataset/school-locations-2018",
        visualisation: null
      },
      nextElements: [
        {
          id: "sport-recreation",
          segue: "You choose to go and play soccer"
        },

        // Dummy segue for testing...
        {
          id: "recycling",
          segue: "Suddenly, you notice some rubbish on the ground"
        }
      ]
    },
    {
      id: "sport-recreation",
      template: "You are playing soccer at Kingston Heath Reserve...",
      image: "http://suhc.com.au/wp-content/uploads/HinHockey-1-2014.jpg",
      dataSource: {
        name: "Sport and Recreation",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/275",
        link:
          "https://www.data.vic.gov.au/data/dataset/sport-and-recreational-facilities",
        visualisation: null
      },
      nextElements: [
        {
          id: "recycling",
          segue:
            "I see some soft drink cans on the ground, so I pick them up and throw them into a recycling bin nearby."
        }
      ]
    },
    {
      id: "recycling",
      template:
        "Each tonne of aluminium recycled at the kerbside saves 17 tonnes of CO2. That's the same as planting 26 trees, or driving over 50,000km!",
      image: "",
      dataSource: {
        name: "LCA kerbside recycling calculator",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/274",
        link:
          "https://www.data.vic.gov.au/data/dataset/lca-kerbside-recycling-calculator",
        visualisation: null
      },
      nextElements: [
        {
          id: "aging",
          segue:
            "as you put the recycling away you see an elderly gentleman feeding the ducks"
        },

        // Dummy segues for testing...
        {
          id: "graffiti",
          segue: "There is some graffiti on the wall..."
        },
        {
          id: "multiculturalism",
          segue: "And notice some great international artwork on the wall..."
        }
      ]
    },
    {
      id: "aging",
      template: "[NAME] aging",
      image:
        "https://i.pinimg.com/originals/a7/9f/18/a79f18003de9b41dc90361e97ffa835a.jpg",
      dataSource: {
        name: "Aged care",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/346",
        link:
          "https://www.aihw.gov.au/reports/older-people/older-australia-at-a-glance/contents/summary",
        visualisation: null
      },
      nextElements: [
        // TODO these don't work as we do not support unhappy path (ie no nextElements for grafitti & trees)
        // {
        //   id: "graffiti",
        //   segue: ""
        // },
        // {
        //   id: "trees",
        //   segue: ""
        // },
        {
          id: "multiculturalism",
          segue: "Australians come from many different backgrounds..."
        }
      ]
    },
    {
      id: "graffiti",
      template: "I want to be artistic and graffiti a mural",
      image:
        "https://www.thefactsite.com/wp-content/uploads/2017/10/graffiti-facts.jpg",
      dataSource: {
        name: "Crime Stats Agency",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/300",
        link:
          "https://www.crimestatistics.vic.gov.au/crime-statistics/latest-crime-data",
        visualisation: null
      },
      nextElements: []
    },
    {
      id: "trees",
      template: "There are some trees",
      image: "https://lph5i1b6c053kq7us26bdk75-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/graffiti-facts.jpg",
      dataSource: {
        name: "Melbourne Urban Forest Visual",
        hackerspace_id: "",
        link: "https://data.melbourne.vic.gov.au/",
        visualisation: null
      },
      nextElements: []
    },
    {
      id: "multiculturalism",
      template:
        "I know many people in my community that are not born in Australia",
      image:
        "https://www.amf.net.au/library/uploads/images/The_Many_Voices_of_Young_Australians.jpg",
      dataSource: {
        name: "2016 Community Profiles",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/269",
        link:
          "https://www.multicultural.vic.gov.au/population-and-migration/victorias-diversity/community-profiles-2016-census",
        visualisation: "multiculturalism.gif"
      },
      nextElements: [
        {
          id: "gender-equality",
          segue: "Are women and men treated as equals in this country?"
        }
      ]
    },
    {
      id: "gender-equality",
      template: "[NAME] gender-equality",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/NYC_Dyke_March_2011.jpg/1599px-NYC_Dyke_March_2011.jpg",
      dataSource: {
        name:
          "Average hourly earnings of female and male employees by occupation",
        hackerspace_id: null,
        link:
          "https://data.gov.au/dataset/average-hourly-earnings-of-female-and-male-employees-by-occupation",
        visualisation: null
      },
      nextElements: [
        {
          id: "profession",
          segue: "What do you want to do when you grow up?"
        }
      ]
    },
    {
      id: "profession",
      template: "I want to be a fire fighter when I grow up",
      image:
        "https://assets-auto.rbl.ms/e44680baec11ce3e6151d710dc3e79c9b875b57e4e321e8787a3dbf0bf0b7786",
      dataSource: {
        name: "Employment projections",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/116",
        link:
          "http://lmip.gov.au/default.aspx?LMIP/GainInsights/EmploymentProjections",
        visualisation: null
      },
      nextElements: [
        {
          id: "indigenous",
          segue: "Do indigenous Australians have the same opportunities?"
        }
      ]
    },
    {
      id: "indigenous",
      template: "Social and Emotional Wellbeing of indigenous Australians",
      image:
        "https://cdn.newsapi.com.au/image/v1/6de41d261846a75fee88dcf92a67efc9",
      dataSource: {
        name: "Indigenous health & welfare services",
        hackerspace_id: "https://2018.hackerspace.govhack.org/data_sets/354",
        link:
          "https://www.aihw.gov.au/reports-statistics/health-welfare-services/indigenous-health-welfare-services/data",
        visualisation: null
      },
      nextElements: []
    }
  ]
};

const withImages = storyElements.storyElements
  .filter(e => e.image != null && e.image.length > 0)
  .concat({
    id: "placeholder",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Aboriginal_Art_Australia%281%29.jpg/1280px-Aboriginal_Art_Australia%281%29.jpg"
  });

console.log(
  "Script to download all these images:\n\n" +
    withImages
      .map(element => `wget -O ${element.id}.jpg ${element.image}`)
      .join("\n") +
    "\n\n" +
    withImages
      .map(element => `mogrify -resize 1024x1024 ${element.id}.jpg`)
      .join("\n") +
    "\n\n" +
    withImages
      .map(
        element =>
          `~/Downloads/cartoon ${element.id}.jpg ../cartoon/${element.id}.jpg`
      )
      .join("\n")
);

export default storyElements;
