// 8 cards
// 1) School - Michael
//    I am at school
//
// 3) sport recreation - Selena
//    segue - I to play soccer at the local park
//    I am at the local park and I see
//    At the local park I saw people playing various sports

//    Kingston Heath Reserve on Farm Road, HEATHERTON 3202, Grass Soccer Field, facility is 0-5 years old, 5* rated facility, with Unisex and Umpire/Offical change rooms
//    9 soccer field locations in Kingston, 8 of which are offering grass fields

// 4) recycling - Adam
//    segue -
//    I saw some rubbish so I picked it up and put it into recycling
//
// 6) Aging young vs old - Adam
//    An elderly gentleman thanked me with an italian accent
//
// *) Reject Graffiti - Selena
//    Crime stats https://2018.hackerspace.govhack.org/data_sets/300

// *) Reject Trees - Michael
//
// 2) multiculturalism - Michael
//    Italians came on the boats in 1940's data
//
// 7) Gender equality - Michael
//
// 5) profession - Selena
//    Fire Fighters have an 8.6% projected growth in next 5 years in Australia
//
// 8) Indiginous - Adam
//

const storyElements = {
  storyElements: [
    {
      id: "school",
      template: "You are at Parkdale Primary School",
      image: "http://www.parkdaleps.vic.edu.au/uploaded_files/media/gallery/parkdale_primary_201527_crop.jpg",
      dataSource: {
        name: 'School Locations',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/295',
        link: 'https://www.data.vic.gov.au/data/dataset/school-locations-2018',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "sport-recreation",
          "segue": "You choose to go and play soccer",
        },
      ]
    },
    {
      id: "sport-recreation",
      template: "I am playing soccer at Kingston Heath Reserve",
      image: "http://suhc.com.au/wp-content/uploads/HinHockey-1-2014.jpg",
      dataSource: {
        name: 'Sport and Recreation',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/275',
        link: 'https://www.data.vic.gov.au/data/dataset/sport-and-recreational-facilities',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "recycling",
          "segue": "I see some rubbish and decide to recycle it"
        },
      ]
    },
    {
      id: "recycling",
      template: "You spot some soft drink cans on the ground, so you pick them up and throw them into a recycling bin nearby. You learnt at school that each tonne of aluminium recycled at the kerbside saves 17 tonnes of CO2. That's the same as planting 26 trees, or driving over 50,000km in your family car!",
      image: "",
      dataSource: {
        name: 'LCA kerbside recycling calculator',
        hackerspace_id: null,
        link: 'https://www.data.vic.gov.au/data/dataset/lca-kerbside-recycling-calculator',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "aging",
          "segue": "as you put the recycling away you see an elderly gentleman feeding the ducks"
        },
      ]
    },
    {
      id: "aging",
      template: "[NAME] aging",
      image: "https://i.pinimg.com/originals/a7/9f/18/a79f18003de9b41dc90361e97ffa835a.jpg",
      dataSource: {
        name: '',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/ ???',
        link: '',
        visualisation: 'N/A',
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
          segue: "segue to multiculturalism"
        },
      ]
    },
    {
      id: "graffiti",
      template: "I want to be artistic and graffiti a mural",
      image: "https://www.google.com.au/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPxMK4h6vdAhWPbN4KHRu-AHkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thefactsite.com%2F2017%2F10%2Fgraffiti-facts.html&psig=AOvVaw3z7IGWQEHmRc1sxchH1Ys1&ust=1536484065468492",
      dataSource: {
          name: 'Crime Stats Agency',
          hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/300',
          link: 'https://www.crimestatistics.vic.gov.au/crime-statistics/latest-crime-data',
          visualisation: 'N/A',
      },
      nextElements: [],
    },
    {
      id: "trees",
      template: "I want to be artistic and graffiti a mural",
      image: "https://www.google.com.au/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPxMK4h6vdAhWPbN4KHRu-AHkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thefactsite.com%2F2017%2F10%2Fgraffiti-facts.html&psig=AOvVaw3z7IGWQEHmRc1sxchH1Ys1&ust=1536484065468492",
      dataSource: {
          name: 'Melbourne Urban Forest Visual',
          hackerspace_id: '',
          link: 'https://data.melbourne.vic.gov.au/',
          visualisation: 'N/A',
      },
      nextElements: [],
    },
    {
      id: "multiculturalism",
      template: "[NAME] multiculturalism",
      image: "https://www.amf.net.au/library/uploads/images/The_Many_Voices_of_Young_Australians.jpg",
      dataSource: {
        name: '',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/ ???',
        link: '',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "gender-equality",
          segue: "segue to gender-equality"
        },
      ],
    },
    {
      id: "gender-equality",
      template: "[NAME] gender-equality",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/NYC_Dyke_March_2011.jpg/1599px-NYC_Dyke_March_2011.jpg",
      dataSource: {
        name: '',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/ ???',
        link: '',
        visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "profession",
          segue: "segue to profession"
        },
      ],
    },
    {
      id: "profession",
      template: "I want to be a fire fighter when I grow up",
      image: "https://assets-auto.rbl.ms/e44680baec11ce3e6151d710dc3e79c9b875b57e4e321e8787a3dbf0bf0b7786",
      dataSource: {
          name: 'Employment projections',
          hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/116',
          link: 'http://lmip.gov.au/default.aspx?LMIP/GainInsights/EmploymentProjections',
          visualisation: 'N/A',
      },
      nextElements: [
        {
          id: "indigenous",
          segue: "segue to indigenous"
        },
      ],
    },
    {
      id: "indigenous",
      template: "[NAME] indigenous",
      image: "https://cdn.newsapi.com.au/image/v1/6de41d261846a75fee88dcf92a67efc9",
      dataSource: {
        name: '',
        hackerspace_id: 'https://2018.hackerspace.govhack.org/data_sets/ ???',
        link: '',
        visualisation: 'N/A',
      },
      nextElements: [],
    }
  ]
};

export default storyElements;